/* eslint-disable */
const { tailwindPlugin, webpackPlugin } = require('./src/plugins');
const isDev = process.env.NODE_ENV === 'development';
const pageRef = require('./src/plugins/pageRef');

// 通用文档配置（抽离复用，减少冗余）
const commonDocOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/playoo/Digital-Support-Notes/edit/main/Website/',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
  beforeDefaultRemarkPlugins: [pageRef],
  sidebarPath: require.resolve('./sidebars/autogen.js'),
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // 全局脚本
  scripts: [
    { src: "https://status.notes.nayanpatel.net/widget/script.js" }
  ],
  // 站点基础信息
  title: 'Digital Support Services Notes',
  tagline: 'An awesome textbook alternative, that you can contribute to! 🚀',
  url: 'https://notes.nayanpatel.net',
  baseUrl: '/',
  favicon: 'favicon.ico',
  organizationName: 'Nayan-Web', // 修正：对应GitHub用户名
  projectName: 'Digital-Support-Notes', // 修正：对应GitHub仓库名
  // 错误处理策略
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // 全局样式引入
  clientModules: [require.resolve('./src/css/tailwind.css')],

  // 主题配置（导航、样式、插件等）
  themeConfig: {
    // 统计分析插件
    umami: {
      websiteid: "67a6f4d2-2b85-4678-8972-d5d43a6216ab",
      src: "https://analytics.notes.nayanpatel.net/umami.js",
    },
    clarity: { ID: "9hfzg8mbot" },
    // SEO 元数据
    metadatas: [
      { name: 'og:image', content: 'https://meta-image.vercel.app/Digital%20Support%20Services%20Notes!.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fnotes.nayanpatel.net%2Fsitelogo.svg&widths=250&heights=250' },
      { name: 'theme-color', content: '#5fa0ff' },
      { name: 'twitter:card', content: 'summary' }
    ],
    // 搜索功能
    algolia: {
      appId: 'T2T780TWHU',
      apiKey: '99a14a43d86b4d0cb8f8608e65b3edaf',
      indexName: 'notes-nayanpatel',
      contextualSearch: true,
    },
    // 顶部公告栏
    announcementBar: {
      id: 'beta',
      content: "😲 We've reached over <strong>20K+</strong> views for these notes! 🙏",
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    // 强制浅色模式
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    // 顶部导航栏
    navbar: {
      title: 'Digital Support Services Notes',
      hideOnScroll: false,
      logo: {
        alt: 'Digital Support Services notes',
        src: '/img/logonobg.png',
      },
      items: [
        { label: 'Home', to: '/', activeBaseRegex: '(^/docs)' },
        // 笔记下拉菜单
        {
          type: 'dropdown',
          label: 'Notes',
          position: 'left',
          items: [
            { label: 'Business Context', to: '/business/About-business', activeBasePath: '/business' },
            { label: 'Data', to: '/data/About-data', activeBasePath: '/data' },
            { label: 'Digital Environments', to: '/digital-environments/About-digital-environments', activeBasePath: '/digital-environments' },
            { label: 'Planning', to: '/planning/About-planning', activeBasePath: '/planning' },
            { label: 'Diversity and Inclusion', to: '/diversity-and-inclusion/About-diversity-and-inclusion', activeBasePath: '/diversity-and-inclusion' },
            { label: 'Legislation', to: '/legislation/About-legislation', activeBasePath: '/legislation' },
            { label: 'Careers', to: '/careers/About-careers', activeBasePath: '/careers' },
            { label: 'Communication', to: '/communication/About-communication', activeBasePath: '/communication' },
            { label: 'Culture', to: '/culture/About-culture', activeBasePath: '/culture' },
            { label: 'Digital Analysis', to: '/digital-analysis/About-digital-analysis', activeBasePath: '/digital-analysis' },
            { label: 'Fault Analysis', to: '/fault-analysis/About-fault-analysis', activeBasePath: '/fault-analysis' },
            { label: 'Learning', to: '/learning/About-learning', activeBasePath: '/learning' },
            { label: 'Security', to: '/security/About-security', activeBasePath: '/security' },
            { label: 'Testing', to: '/testing/About-testing', activeBasePath: '/testing' },
            { label: 'Tools', to: '/tools/About-tools', activeBasePath: '/tools' },
            { label: 'ESP', to: '/esp/About-esp', activeBasePath: '/esp' },
          ],
        },
        // 工具下拉菜单
        {
          type: 'dropdown',
          label: 'Tools',
          position: 'left',
          items: [
            { label: 'Backdrop Icons', to: '/backdropicons', activeBasePath: '/backdropicons' },
            { label: 'Analytics', href: 'https://analytics.notes.nayanpatel.net/share/NmRzIAly/Digital%20Support%20Notes' },
          ],
        },
        { to: '/feature-requests', label: 'Feature Request →', position: 'left', className: 'feature-req' },
        { href: '#', position: 'right', label: "What's new?", 'data-canny-changelog': 'true' },
        { href: 'https://github.com/Nayan-Web/Digital-Support-Notes', position: 'right', className: 'header-github-link', 'aria-label': 'GitHub repository' },
        { href: 'https://www.producthunt.com/posts/digital-support-notes', position: 'right', className: 'header-prod-link', 'aria-label': 'Product Hunt' },
      ],
    },
    // 可隐藏侧边栏
    hideableSidebar: true,
    // 代码高亮配置
    prism: {
      additionalLanguages: ['dart', 'ruby', 'groovy', 'kotlin', 'java', 'swift', 'objectivec'],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },

  // 预设配置（核心文档+博客）
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
          ...commonDocOptions,
        },
        blog: false, // 关闭博客功能
      },
    ],
  ],

  // 插件列表
  plugins: [
    'docusaurus-plugin-umami',
    'docusaurus-plugin-clarity',
    require('./src/featureRequests/FeatureRequestsPlugin'),
    tailwindPlugin,
    webpackPlugin,
    'docusaurus-plugin-sass',
    // 多实例文档插件（按分类拆分文档）
    ['@docusaurus/plugin-content-docs', { id: 'business', path: 'docs/business', routeBasePath: 'business', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'data', path: 'docs/data', routeBasePath: 'data', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'digital-environments', path: 'docs/digital-environments', routeBasePath: 'digital-environments', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'planning', path: 'docs/planning', routeBasePath: 'planning', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'diversity-and-inclusion', path: 'docs/diversity-and-inclusion', routeBasePath: 'diversity-and-inclusion', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'legislation', path: 'docs/legislation', routeBasePath: 'legislation', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'careers', path: 'docs/careers', routeBasePath: 'careers', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'communication', path: 'docs/communication', routeBasePath: 'communication', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'culture', path: 'docs/culture', routeBasePath: 'culture', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'digital-analysis', path: 'docs/digital-analysis', routeBasePath: 'digital-analysis', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'fault-analysis', path: 'docs/fault-analysis', routeBasePath: 'fault-analysis', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'learning', path: 'docs/learning', routeBasePath: 'learning', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'security', path: 'docs/security', routeBasePath: 'security', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'testing', path: 'docs/testing', routeBasePath: 'testing', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'tools', path: 'docs/tools', routeBasePath: 'tools', ...commonDocOptions }],
    ['@docusaurus/plugin-content-docs', { id: 'esp', path: 'docs/esp', routeBasePath: 'esp', ...commonDocOptions }],
  ],
};
