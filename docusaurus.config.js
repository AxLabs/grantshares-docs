// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GrantShares',
  tagline: 'A decentralized and transparent grants program for the Neo ecosystem',
  url: 'https://docs.grantshares.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AxLabs',
  projectName: 'grantshares-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  plugins: [ ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/axlabs/grantshares-docs/tree/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          exclude: [
            '**/5_roadmap.md',
            '**/3_Implementation/*',
          ],
          // While the `exclude` above excludes from the docusaurus build in general,
          // the `sidebarItemsGenerator` below allows us to create a custom function to include/exclude
          // from the sidebar.
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            const newItems = sidebarItems.filter((item) => {
              const newSubItems = item.items.filter((item) => {
                // Keep the filter to remove items with the label 'rfp-docs'
                return item.label !== 'rfp-docs';
              });
              item.items = newSubItems;

              // Set the group to not collapse by default
              if (item.type === 'category' && item.label === 'RFP') {
                item.collapsed = false;
              }

              return item;
            });
            return newItems;
          }
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/axlabs/grantshares-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themes: [
    [
      // Using https://github.com/easyops-cn/docusaurus-search-local for the search bar.
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsDir: "docs", 
        docsRouteBasePath: "/docs",
        indexDocs:true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        style: 'primary',
        logo: {
          alt: 'GrantShares Logo',
          src: 'img/logo_and_title.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'General/intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            href: 'https://grantshares.io/app/proposals',
            label: 'Application',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rvZFQ5382k',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/GrantShares',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/axlabs/grantshares',
              },
              {
                label: 'Application',
                href: 'https://grantshares.io/app/proposals',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GrantShares. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;