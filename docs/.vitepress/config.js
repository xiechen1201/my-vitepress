export default {
  outDir: "../dist",
  title: "SereinVitePress",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    sidebar: [
      {
        text: "Test1Page",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Test2Page",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};
