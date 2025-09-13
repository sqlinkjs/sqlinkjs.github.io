import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "From SQL to HTTP in seconds",
  url: "https://sqlinkjs.github.io",
  tagline:
    "Streamline backend integration with dynamic RESTful APIs, stored procedure execution, and seamless CRUD operations on MySQL tables - all in a single, powerful Node.js library",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },
  baseUrl: "/",
  organizationName: "sqlinkjs",
  projectName: "sqlinkjs.github.io",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:undefined
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: undefined,
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "SQLink",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/releases", label: "Releases", position: "left" },
        {
          href: "https://github.com/sqlinkjs/SQLink",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Issues",
              href: "https://github.com/sqlinkjs/SQLink/issues",
            },
            {
              label: "GitHub",
              href: "https://github.com/sqlinkjs/SQLink",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/sqlink",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Release Notes",
              to: "/releases",
            },
          ],
        },
      ],
      copyright: `SQLink is an open-source project — MIT Licensed`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
