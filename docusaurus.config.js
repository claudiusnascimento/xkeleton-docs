module.exports = {
  title: 'XKELETON DOCS',
  tagline: 'A boilerplate to laravel 7.x framework',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'claudiusnascimento', // Usually your GitHub org/user name.
  projectName: 'xkeleton-docs', // Usually your repo name.
  themeConfig: {
    defaultDarkMode: true,
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Xkeleton Laravel Package Docs',
        src: 'img/x.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        /*
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/xkeleton',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/xkeleton',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/xkeleton',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/claudiusnascimento/xkeleton',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Laravel Boilerplate, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/claudiusnascimento/xkeleton',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/claudiusnascimento/xkeleton',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
