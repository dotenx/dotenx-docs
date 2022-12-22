// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DoTenX',
  // tagline: 'Build backend or automation with DoTenX',
  url: 'https://docs.dotenx.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dotenx', // Usually your GitHub org/user name.
  projectName: 'dotenx', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dotenx/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DoTenX',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'builder_studio/intro',
            position: 'left',
            label: 'Builder Studio',
          },
          {
            type: 'doc',
            docId: 'automation_studio/intro',
            position: 'left',
            label: 'Automation Studio',
          },
          {
            href: 'https://github.com/dotenx/dotenx',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Builder Studio',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/builder_studio/intro',
              },
            ],
          },
          {
            title: 'Automation Studio',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/automation_studio/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/7Zr5UYXDxU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dotenx',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DoTenX.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
