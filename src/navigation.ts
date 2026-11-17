export const navigation = [
  {label: 'Getting started', items: [
    {id: 'overview', label: 'Overview', path: ''},
    {id: 'getting-started/index', label: 'Quickstart', path: 'getting-started/'},
    {id: 'getting-started/connect-application', label: 'Connect an application', path: 'getting-started/connect-application/'},
  ]},
  {label: 'Authentication', items: [
    {id: 'authentication/index', label: 'Choose your approach', path: 'authentication/'},
    {id: 'authentication/hosted', label: 'Hosted', path: 'authentication/hosted/'},
    {id: 'authentication/embedded', label: 'Embedded', path: 'authentication/embedded/'},
    {id: 'authentication/dialog', label: 'Dialog', path: 'authentication/dialog/'},
    {id: 'authentication/custom', label: 'Custom forms', path: 'authentication/custom/'},
    {id: 'authentication/account-security', label: 'Account security', path: 'authentication/account-security/'},
  ]},
  {label: 'Authorization', items: [
    {id: 'authorization/index', label: 'Authorization model', path: 'authorization/'},
    {id: 'authorization/current-user', label: 'Current-user permissions', path: 'authorization/current-user/'},
    {id: 'authorization/server-resolution', label: 'Server-side enforcement', path: 'authorization/server-resolution/'},
    {id: 'authorization/permission-manifest', label: 'Permission Manifest', path: 'authorization/permission-manifest/'},
    {id: 'authorization/management', label: 'Management API', path: 'authorization/management/'},
  ]},
  {label: 'Enterprise & operations', items: [
    {id: 'organizations/index', label: 'Organizations & invitations', path: 'organizations/'},
    {id: 'enterprise/sso', label: 'Enterprise SSO', path: 'enterprise/sso/'},
    {id: 'enterprise/google-github', label: 'Google & GitHub', path: 'enterprise/google-github/'},
    {id: 'enterprise/scim', label: 'SCIM provisioning', path: 'enterprise/scim/'},
    {id: 'webhooks/index', label: 'Webhooks', path: 'webhooks/'},
    {id: 'deployment/index', label: 'Deployment', path: 'deployment/'},
  ]},
  {label: 'SDKs & API', items: [
    {id: 'sdk/javascript/index', label: 'JavaScript', path: 'sdk/javascript/'},
    {id: 'sdk/java/index', label: 'Java', path: 'sdk/java/'},
    {id: 'sdk/go/index', label: 'Go', path: 'sdk/go/'},
    {id: 'sdk/python/index', label: 'Python', path: 'sdk/python/'},
    {id: 'api/index', label: 'API reference', path: 'api/'},
  ]},
] as const;
