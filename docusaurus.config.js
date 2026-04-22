// @ts-check
// Docusaurus configuration - Journal Expert To Product

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Expert To Product',
  tagline: "Le journal d'un DAF qui transforme son expertise en produit",
  favicon: 'img/brand/e2p-logo.png',

  url: 'https://journal.experttoproduct.com',
  baseUrl: '/',

  organizationName: 'expert-to-product',
  projectName: 'journal',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap',
      rel: 'stylesheet',
    },
  ],

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/apropos',
        },
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          blogTitle: 'Journal Expert To Product',
          blogDescription: "Le journal d'un DAF qui transforme son expertise en produit",
          postsPerPage: 10,
          blogSidebarTitle: 'Articles récents',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Expert To Product',
            description: "Le journal d'un DAF qui transforme son expertise en produit",
            copyright: `Copyright © ${new Date().getFullYear()} Expert To Product.`,
            language: 'fr',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/brand/e2p-banner.png',
    navbar: {
      title: 'Expert To Product',
      logo: {
        alt: 'Logo Expert To Product',
        src: 'img/brand/e2p-logo-journal.svg',
        srcDark: 'img/brand/e2p-logo-journal-dark.svg',
      },
      items: [
        {
          to: '/',
          label: 'Articles',
          position: 'left',
        },
        {
          to: '/apropos',
          label: 'À propos',
          position: 'left',
        },
        {
          href: 'https://docs.experttoproduct.com',
          label: 'Documentation AI-Finance DAF',
          position: 'right',
        },
        {
          href: 'https://x.com/ExpertToProduct',
          label: 'X',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Le journal',
          items: [
            {
              label: 'Articles',
              to: '/',
            },
            {
              label: 'À propos',
              to: '/apropos',
            },
          ],
        },
        {
          title: 'Produits',
          items: [
            {
              label: 'AI-Finance DAF',
              href: 'https://docs.experttoproduct.com',
            },
          ],
        },
        {
          title: 'Suivez-nous',
          items: [
            {
              label: 'X / Twitter',
              href: 'https://x.com/ExpertToProduct',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Expert To Product. Tous droits réservés.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  }),
};

module.exports = config;
