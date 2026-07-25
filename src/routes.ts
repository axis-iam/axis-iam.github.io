export type PublicRoute = {
  key: string;
  path: `/${string}/` | '/';
  product: 'vertex';
  status: 'public';
};

export const publicRoutes: readonly PublicRoute[] = [
  {key: 'vertex.home', path: '/', product: 'vertex', status: 'public'},
  {key: 'vertex.overview', path: '/vertex/', product: 'vertex', status: 'public'},
  {key: 'vertex.getting-started', path: '/vertex/getting-started/', product: 'vertex', status: 'public'},
  {key: 'vertex.getting-started.connect-application', path: '/vertex/getting-started/connect-application/', product: 'vertex', status: 'public'},
  {key: 'vertex.authentication', path: '/vertex/authentication/', product: 'vertex', status: 'public'},
  {key: 'vertex.authentication.hosted', path: '/vertex/authentication/hosted/', product: 'vertex', status: 'public'},
  {key: 'vertex.authentication.embedded', path: '/vertex/authentication/embedded/', product: 'vertex', status: 'public'},
  {key: 'vertex.authentication.dialog', path: '/vertex/authentication/dialog/', product: 'vertex', status: 'public'},
  {key: 'vertex.authorization', path: '/vertex/authorization/', product: 'vertex', status: 'public'},
  {key: 'vertex.authorization.current-user', path: '/vertex/authorization/current-user/', product: 'vertex', status: 'public'},
  {key: 'vertex.authorization.server-resolution', path: '/vertex/authorization/server-resolution/', product: 'vertex', status: 'public'},
  {key: 'vertex.authorization.permission-manifest', path: '/vertex/authorization/permission-manifest/', product: 'vertex', status: 'public'},
  {key: 'vertex.authorization.management', path: '/vertex/authorization/management/', product: 'vertex', status: 'public'},
  {key: 'vertex.organizations', path: '/vertex/organizations/', product: 'vertex', status: 'public'},
  {key: 'vertex.enterprise.sso', path: '/vertex/enterprise/sso/', product: 'vertex', status: 'public'},
  {key: 'vertex.enterprise.google-github', path: '/vertex/enterprise/google-github/', product: 'vertex', status: 'public'},
  {key: 'vertex.enterprise.scim', path: '/vertex/enterprise/scim/', product: 'vertex', status: 'public'},
  {key: 'vertex.webhooks', path: '/vertex/webhooks/', product: 'vertex', status: 'public'},
  {key: 'vertex.deployment', path: '/vertex/deployment/', product: 'vertex', status: 'public'},
  {key: 'vertex.sdk.javascript', path: '/vertex/sdk/javascript/', product: 'vertex', status: 'public'},
  {key: 'vertex.sdk.java', path: '/vertex/sdk/java/', product: 'vertex', status: 'public'},
  {key: 'vertex.sdk.go', path: '/vertex/sdk/go/', product: 'vertex', status: 'public'},
  {key: 'vertex.sdk.python', path: '/vertex/sdk/python/', product: 'vertex', status: 'public'},
  {key: 'vertex.api', path: '/vertex/api/', product: 'vertex', status: 'public'},
] as const;
