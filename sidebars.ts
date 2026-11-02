import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  vertex: [
    'overview',
    {type: 'category', label: 'Getting started', link: {type: 'doc', id: 'getting-started/index'}, items: ['getting-started/connect-application']},
    {type: 'category', label: 'Authentication', link: {type: 'doc', id: 'authentication/index'}, items: ['authentication/hosted', 'authentication/embedded', 'authentication/dialog', 'authentication/custom', 'authentication/account-security']},
    {type: 'category', label: 'Authorization', link: {type: 'doc', id: 'authorization/index'}, items: ['authorization/current-user', 'authorization/server-resolution', 'authorization/permission-manifest', 'authorization/management']},
    'organizations/index',
    {type: 'category', label: 'Enterprise', items: ['enterprise/sso', 'enterprise/google-github', 'enterprise/scim']},
    'webhooks/index',
    'deployment/index',
    {type: 'category', label: 'SDKs', items: ['sdk/javascript/index', 'sdk/java/index', 'sdk/go/index', 'sdk/python/index']},
    'api/index',
  ],
};

export default sidebars;
