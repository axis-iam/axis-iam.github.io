export type ApiFamily = {
  key: string;
  paths: readonly string[];
  authentication: string;
  callers: readonly string[];
  stability: 'pre-beta';
};

export const publicApiFamilies: readonly ApiFamily[] = [
  {key: 'oauth-oidc', paths: ['/.well-known/openid-configuration', '/oauth2/authorize', '/oauth2/token', '/oauth2/revoke', '/connect/logout', '/oauth2/jwks'], authentication: 'protocol-specific', callers: ['browser', 'native', 'web-bff', 'm2m'], stability: 'pre-beta'},
  {key: 'registration', paths: ['/api/v1/auth/signup', '/api/v1/auth/signup/operations/{operationId}', '/api/v1/auth/signup/operations/{operationId}/challenges', '/api/v1/auth/signup/operations/{operationId}/complete', '/api/v1/auth/signup/operations/{operationId}/cancel'], authentication: 'public-client-context-and-registration-control', callers: ['embedded-auth', 'auth-dialog', 'custom-auth', 'web-bff'], stability: 'pre-beta'},
  {key: 'password-recovery', paths: ['/api/v1/auth/password/forgot', '/api/v1/auth/password/reset'], authentication: 'client-bound-email-reset-proof', callers: ['browser', 'web-bff'], stability: 'pre-beta'},
  {key: 'session-validity', paths: ['/api/v1/auth/session/validity'], authentication: 'user-bearer-token', callers: ['web-bff', 'first-party-ui'], stability: 'pre-beta'},
  {key: 'authentication-transactions', paths: ['/api/v1/auth/transactions', '/api/v1/auth/transactions/{id}', '/api/v1/auth/transactions/{id}/challenges', '/api/v1/auth/transactions/{id}/authorize', '/api/v1/auth/transactions/{id}/authenticate', '/api/v1/auth/transactions/{id}/mfa', '/api/v1/auth/transactions/{id}/complete', '/api/v1/auth/transactions/{id}/cancel'], authentication: 'transaction-control-and-pkce', callers: ['embedded-auth', 'auth-dialog', 'custom-auth', 'web-bff'], stability: 'pre-beta'},
  {key: 'account-recovery', paths: ['/api/v1/auth/recovery/authorize', '/api/v1/auth/recovery/{id}'], authentication: 'purpose-bound-recovery', callers: ['hosted-auth', 'account-sdk'], stability: 'pre-beta'},
  {key: 'identity-operations', paths: ['/api/v1/auth/me/identity-operations'], authentication: 'user-bearer-and-operation-control', callers: ['account-sdk'], stability: 'pre-beta'},
  {key: 'invitation-journeys', paths: ['/api/v1/auth/invitation-journeys/{ref}', '/api/v1/auth/invitation-journeys/{ref}/continue', '/api/v1/auth/invitation-journeys/{ref}/confirm'], authentication: 'purpose-bound-invitation', callers: ['invitation-sdk'], stability: 'pre-beta'},
  {key: 'current-user', paths: ['/api/v1/auth/me/**', '/api/v1/auth/sessions', '/api/v1/auth/sessions/{sid}', '/api/v1/auth/logout'], authentication: 'user-bearer-token', callers: ['first-party-ui', 'account-sdk', 'web-bff'], stability: 'pre-beta'},
  {key: 'public-client-discovery', paths: ['/api/v1/apps/{clientId}/auth-methods', '/api/v1/apps/{clientId}/auth-policy', '/api/v1/apps/{clientId}/branding', '/api/v1/apps/{clientId}/registration-grants:preview'], authentication: 'public-client-context', callers: ['hosted-auth', 'embedded-auth', 'web-bff'], stability: 'pre-beta'},
  {key: 'permission-resolution', paths: ['/open/v1/permissions:resolve', '/open/v1/apps/{clientId}/permissions'], authentication: 'confidential-client', callers: ['resource-server'], stability: 'pre-beta'},
  {key: 'permission-manifest', paths: ['/open/v1/permission-manifests:sync'], authentication: 'exact-scope-m2m', callers: ['ci', 'deployment'], stability: 'pre-beta'},
  {key: 'authorization-management', paths: ['/open/v1/organizations', '/open/v1/roles', '/open/v1/permissions', '/open/v1/users/{userId}/roles', '/open/v1/registration-grants'], authentication: 'exact-scope-m2m', callers: ['backend-automation'], stability: 'pre-beta'},
  {key: 'scim-v2', paths: ['/open/v1/scim/v2/**'], authentication: 'provisioning-credential', callers: ['enterprise-scim-client'], stability: 'pre-beta'},
] as const;
