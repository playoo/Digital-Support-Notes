/* eslint-disable */
const { tailwindPlugin, webpackPlugin } = require('./src/plugins');
const isDev = process.env.NODE_ENV === 'development';
const pageRef = require('./src/plugins/pageRef');

// 文档通用配置
const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/playoo/Digital-Support-Notes/edit/main/Website/',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
  beforeDefaultRemarkPlugins: [pageRef],
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  scripts: [
    { src: "https://status.notes.nayanpatel.net/widget/script.js" }
  ],

  title: '数字支持服务笔记',
  tagline: '欢迎贡献笔记，一起学习成长！🚀',
  url: 'https://notes.nayanpatel.net',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'Nayan-Web',
  projectName: 'Digital-Support-Notes',
  clientModules: [require.resolve('./src/css/tailwind.css')],

  themeConfig: {
    umami: {
      websiteid: "67a6f4d2-2b85-4678-8972-d5d43a6216ab",
      src: "https://analytics.notes.nayanpatel.net/umami.js",
    },
    clarity: { ID: "9hfzg8mbot" },

    metadatas: [
      { name: 'og:image', content: 'https://meta-image.vercel.app/Digital%20Support%20Services%20Notes!.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fnotes.nayanpatel.net%2Fsitelogo.svg&widths=250&heights=250' },
      { name: 'theme-color', content: '#5fa0ff' },
      { name: 'twitter:card', content: 'summary' }
    ],

    algolia: {
      appId: 'T2T780TWHU',
      apiKey: '99a14a43d86b4d0cb8f8608e65b3edaf',
      indexName: 'notes-nayanpatel',
      contextualSearch: true,
    },

    announcementBar: {
      id: 'beta',
      content: "😲 笔记浏览量已突破 <strong>2万+</strong>！感谢支持 🙏",
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },

    navbar: {
      title: '数字支持服务笔记',
      hideOnScroll: false,
      logo: {
        alt: '数字支持服务笔记',
        src: '/img/logonobg.png',
      },
      items: [
        { label: '首页', to: '/', activeBaseRegex: '(^/docs)' },
        {
          type: 'dropdown',
          label: '笔记',
          position: 'left',
          items: [
            { label: '业务背景', to: '/business/About-business', activeBasePath: '/business' },
            { label: '数据', to: '/data/About-data', activeBasePath: '/data' },
            { label: '数字环境', to: '/digital-environments/About-digital-environments', activeBasePath: '/digital-environments' },
            { label: '规划', to: '/planning/About-planning', activeBasePath: '/planning' },
            { label: '多元与包容', to: '/divertisty-and-inclusion/About-divertisty-and-inclusion', activeBasePath: '/divertisty-and-inclusion' },
            { label: '法规', to: '/legislation/About-legislation', activeBasePath: '/legislation' },
            { label: '职业', to: '/careers/About-careers', activeBasePath: '/careers' },
            { label: '沟通', to: '/communication/About-communication', activeBasePath: '/communication' },
            { label: '文化', to: '/culture/About-culture', activeBasePath: '/culture' },
            { label: '数字分析', to: '/digital-analysis/About-digital-analysis', activeBasePath: '/digital-analysis' },
            { label: '故障分析', to: '/fault-analysis/About-fault-analysis', activeBasePath: '/fault-analysis' },
            { label: '学习', to: '/learning/About-learning', activeBasePath: '/learning' },
            { label: '安全', to: '/security/About-security', activeBasePath: '/security' },
            { label: '测试', to: '/testing/About-testing', activeBasePath: '/testing' },
            { label: '工具', to: '/tools/About-tools', activeBasePath: '/tools' },
            { label: 'ESP', to: '/esp/About-esp', activeBasePath: '/esp' },
          ]
        },
        {
          type: 'dropdown',
          label: '工具',
          position: 'left',
          items: [
            { label: '背景图标', to: '/backdropicons', activeBasePath: '/backdropicons' },
            { label: '数据分析', href: 'https://analytics.notes.nayanpatel.net/share/NmRzIAly/Digital%20Support%20Notes' },
          ]
        },
        { to: '/feature-requests', label: '功能建议 →', position: 'left', className: 'feature-req' },
        { href: '#', position: 'right', label: '更新日志', 'data-canny-changelog': 'true' },
        { href: 'https://github.com/Nayan-Web/Digital-Support-Notes', position: 'right', className: 'header-github-link', 'aria-label': 'GitHub 仓库' },
        { href: 'https://www.producthunt.com/posts/digital-support-notes', position: 'right', className: 'header-prod-link', 'aria-label': 'Product Hunt' },
      ],
    },

    hideableSidebar: true,
    prism: {
      additionalLanguages: ['dart', 'ruby', 'groovy', 'kotlin', 'java', 'swift', 'objectivec'],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
          ...pageOptions,
        },
        blog: false,
      },
    ],
  ],

  plugins: [
    'docusaurus-plugin-umami',
    'docusaurus-plugin-clarity',
    require('./src/featureRequests/FeatureRequestsPlugin'),
    tailwindPlugin,
    webpackPlugin,
    'docusaurus-plugin-sass',

    ['@docusaurus/plugin-content-docs', { id: 'business', path: 'docs/business', routeBasePath: 'business', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'data', path: 'docs/data', routeBasePath: 'data', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'digital-environments', path: 'docs/digital-environments', routeBasePath: 'digital-environments', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'planning', path: 'docs/planning', routeBasePath: 'planning', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'divertisty-and-inclusion', path: 'docs/divertisty-and-inclusion', routeBasePath: 'divertisty-and-inclusion', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'legislation', path: 'docs/legislation', routeBasePath: 'legislation', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'careers', path: 'docs/careers', routeBasePath: 'careers', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'communication', path: 'docs/communication', routeBasePath: 'communication', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'culture', path: 'docs/culture', routeBasePath: 'culture', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'digital-analysis', path: 'docs/digital-analysis', routeBasePath: 'digital-analysis', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'fault-analysis', path: 'docs/fault-analysis', routeBasePath: 'fault-analysis', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'learning', path: 'docs/learning', routeBasePath: 'learning', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'security', path: 'docs/security', routeBasePath: 'security', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'testing', path: 'docs/testing', routeBasePath: 'testing', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'tools', path: 'docs/tools', routeBasePath: 'tools', ...pageOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'esp', path: 'docs/esp', routeBasePath: 'esp', ...pageOptions }],
  ],
};
