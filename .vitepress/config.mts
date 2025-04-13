import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TP3",
  description: "TP3 star wars Anthony Saillant et Lorik Parent",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/index" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          {
            text: "Revue de code Anthony semaine 1",
            link: "/Anthony-semaine1",
          },
          { text: "Revue de code Lorik semaine 1", link: "/Lorik-semaine1" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
