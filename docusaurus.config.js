// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Emanate Biostats User Guide",
  tagline: "Everything you need to know about our SAS processes",
  url: "https://emanate-biostats-inc.github.io",
  baseUrl: "/user-guide/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "emanate-biostats-inc", // Usually your GitHub org/user name.
  projectName: "user-guide", // Usually your repo name.
  // trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Emanate-Biostats-Inc/user-guide/blob/master/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/Emanate-Biostats-Inc/user-guide/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Emanate Biostats User Guide",
        logo: {
          alt: "Emanate Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "programming/style-guide",
            position: "right",
            label: "Programming",
          },
          {
            type: "doc",
            docId: "macros/macros-intro",
            position: "right",
            label: "Macros",
          },
          {
            type: "doc",
            docId: "settings/saving-settings",
            position: "right",
            label: "Settings",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Programming",
                to: "/docs/programming/style-guide",
              },
              {
                label: "Macros",
                to: "/docs/macros/macros-intro",
              },
              {
                label: "Settings",
                to: "/docs/settings/saving-settings",
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
