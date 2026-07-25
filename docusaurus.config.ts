import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Axis Vertex Documentation',
  tagline: 'Application identity, authentication, and authorization',
  favicon: 'img/favicon.png',
  url: 'https://axis-iam.github.io',
  baseUrl: '/',
  organizationName: 'axis-iam',
  projectName: 'axis-iam.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      'zh-CN': {label: '简体中文', htmlLang: 'zh-CN'},
    },
  },
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},
  future: {v4: true},
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'vertex',
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,
          showLastUpdateTime: false,
          versions: {current: {label: 'Pre-beta', path: ''}},
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
        sitemap: {changefreq: 'weekly', priority: 0.6},
      } satisfies Options,
    ],
  ],
  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {indexDocs: true, indexBlog: false, indexPages: true, language: ['en', 'zh']},
    ],
  ],
  themeConfig: {
    image: 'img/vertex-docs.png',
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'Axis Vertex',
      logo: {alt: 'Axis Vertex', src: 'img/favicon.png'},
      items: [
        {to: '/vertex/getting-started/', label: 'Get started', position: 'left'},
        {to: '/vertex/authentication/', label: 'Authentication', position: 'left'},
        {to: '/vertex/authorization/', label: 'Authorization', position: 'left'},
        {to: '/vertex/sdk/javascript/', label: 'SDKs', position: 'left'},
        {to: '/vertex/api/', label: 'API', position: 'left'},
        {type: 'search', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/axis-iam', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {title: 'Build', items: [{label: 'Getting started', to: '/vertex/getting-started/'}, {label: 'SDKs', to: '/vertex/sdk/javascript/'}]},
        {title: 'Operate', items: [{label: 'Deployment', to: '/vertex/deployment/'}, {label: 'Webhooks', to: '/vertex/webhooks/'}]},
      ],
      copyright: `Copyright ${new Date().getFullYear()} Axis IAM.`,
    },
    prism: {additionalLanguages: ['java', 'go', 'python', 'bash', 'json']},
  } satisfies ThemeConfig,
};

export default config;
