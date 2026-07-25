import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {publicApiFamilies} from '../src/apiFamilies.js';

const sourceRoot = process.env.VERTEX_SOURCE_ROOT ?? '../iam-java';
const backend = `${sourceRoot}/axis-iam`;

type Evidence = {file: string; fragments: readonly string[]; kind?: 'controller' | 'security-config' | 'protocol-integration-test'; symbol?: string};

const evidence: Record<string, Evidence> = {
  '/.well-known/openid-configuration': {file: 'iam-server/src/test/java/com/chaosguide/iam/server/api/OidcProtocolIntegrationTest.java', fragments: ['.uri("/.well-known/openid-configuration")']},
  '/oauth2/authorize': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/config/ServerSecurityConfig.java', fragments: ['"/oauth2/authorize"'], kind: 'security-config'},
  '/oauth2/token': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/config/ServerSecurityConfig.java', fragments: ['"/oauth2/token"'], kind: 'security-config'},
  '/connect/logout': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/config/ServerSecurityConfig.java', fragments: ['"/connect/logout"'], kind: 'security-config'},
  '/oauth2/jwks': {file: 'iam-server/src/test/java/com/chaosguide/iam/server/api/OidcProtocolIntegrationTest.java', fragments: ['.uri("/oauth2/jwks")']},
  '/api/v1/auth/signup': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/AuthController.java', fragments: ['@RequestMapping("/api/v1/auth")', '@PostMapping("/signup")']},
  '/api/v1/auth/login': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/AuthController.java', fragments: ['@RequestMapping("/api/v1/auth")', '@PostMapping("/login")']},
  '/api/v1/auth/token/refresh': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/AuthController.java', fragments: ['@RequestMapping("/api/v1/auth")', '@PostMapping("/token/refresh")']},
  '/api/v1/auth/password/forgot': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/PasswordController.java', fragments: ['@RequestMapping("/api/v1/auth/password")', '@PostMapping("/forgot")']},
  '/api/v1/auth/password/reset': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/PasswordController.java', fragments: ['@RequestMapping("/api/v1/auth/password")', '@PostMapping("/reset")']},
  '/api/v1/auth/me/**': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/account/AccountController.java', fragments: ['@RequestMapping("/api/v1/auth/me")']},
  '/api/v1/auth/sessions': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/SessionController.java', fragments: ['@RequestMapping("/api/v1/auth")', '@GetMapping("/sessions")']},
  '/api/v1/auth/sessions/{sid}': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/SessionController.java', fragments: ['@DeleteMapping("/sessions/{sid}")']},
  '/api/v1/auth/logout': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/SessionController.java', fragments: ['@PostMapping("/logout")']},
  '/api/v1/apps/{clientId}/auth-methods': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/AuthMethodsPublicController.java', fragments: ['@RequestMapping("/api/v1/apps/{clientId}/auth-methods")']},
  '/api/v1/apps/{clientId}/auth-policy': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/AuthPolicyPublicController.java', fragments: ['@GetMapping("/{clientId}/auth-policy")']},
  '/api/v1/apps/{clientId}/branding': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/BrandingPublicController.java', fragments: ['@GetMapping("/{clientId}/branding")']},
  '/api/v1/apps/{clientId}/registration-grants:preview': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/api/controller/RegistrationGrantPreviewController.java', fragments: ['@RequestMapping("/api/v1/apps/{clientId}/registration-grants:preview")']},
  '/open/v1/permissions:resolve': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/auth/controller/OpenPermissionController.java', fragments: ['@RequestMapping("/open/v1")', '@PostMapping("/permissions:resolve")']},
  '/open/v1/apps/{clientId}/permissions': {file: 'iam-server/src/main/java/com/chaosguide/iam/server/auth/controller/OpenPermissionController.java', fragments: ['@RequestMapping("/open/v1")', '@GetMapping("/apps/{clientId}/permissions")']},
  '/open/v1/permission-manifests:sync': {file: 'iam-portal/src/main/java/com/chaosguide/iam/portal/openapi/manifest/PermissionManifestController.java', fragments: ['@PostMapping("/open/v1/permission-manifests:sync")']},
  '/open/v1/organizations': {file: 'iam-portal/src/main/java/com/chaosguide/iam/portal/openapi/controller/OpenOrgController.java', fragments: ['@RequestMapping("/open/v1/organizations")']},
  '/open/v1/roles': {file: 'iam-portal/src/main/java/com/chaosguide/iam/portal/openapi/controller/OpenRoleController.java', fragments: ['@RequestMapping("/open/v1/roles")']},
  '/open/v1/permissions': {file: 'iam-portal/src/main/java/com/chaosguide/iam/portal/openapi/controller/OpenPermissionController.java', fragments: ['@RequestMapping("/open/v1/permissions")']},
  '/open/v1/users/{userId}/roles': {file: 'iam-portal/src/main/java/com/chaosguide/iam/portal/openapi/controller/OpenUserRoleController.java', fragments: ['@RequestMapping("/open/v1/users/{userId}/roles")']},
  '/open/v1/registration-grants': {file: 'iam-portal/src/main/java/com/chaosguide/iam/portal/openapi/controller/OpenRegistrationGrantController.java', fragments: ['@RequestMapping("/open/v1/registration-grants")']},
  '/open/v1/scim/v2/**': {file: 'iam-portal/src/main/java/com/chaosguide/iam/portal/scim/controller/ScimServiceProviderConfigController.java', fragments: ['@RequestMapping(path = "/open/v1/scim/v2"']},
};

async function main() {
  const paths = publicApiFamilies.flatMap((family) => family.paths);
  for (const path of paths) {
    const contract = evidence[path];
    if (!contract) throw new Error(`No source evidence declared for public API path: ${path}`);
    const source = await readFile(`${backend}/${contract.file}`, 'utf8');
    for (const fragment of contract.fragments) {
      if (!source.includes(fragment)) throw new Error(`Public API path ${path} lost source evidence ${fragment} in ${contract.file}`);
    }
  }
  for (const path of Object.keys(evidence)) if (!paths.includes(path)) throw new Error(`Stale API source evidence: ${path}`);
  if (process.argv.includes('--write-evidence')) {
    const revisions = JSON.parse(await readFile('static/source-revisions.json', 'utf8')) as {sources: {vertexBackend: string}};
    const entries = paths.map((path) => {
      const item = evidence[path];
      const symbol = item.symbol ?? item.file.split('/').at(-1)?.replace(/\.java$/, '');
      return {path, source: 'vertexBackend', revision: revisions.sources.vertexBackend, evidenceKind: item.kind ?? (item.file.includes('/test/') ? 'protocol-integration-test' : 'controller'), symbol};
    });
    await mkdir('static/api', {recursive: true});
    await writeFile('static/api/public-api-evidence.json', `${JSON.stringify({schemaVersion: 1, product: 'vertex', entries}, null, 2)}\n`);
  }
  console.log(`Validated ${paths.length} public API paths against Vertex controllers and protocol tests.`);
}

void main();
