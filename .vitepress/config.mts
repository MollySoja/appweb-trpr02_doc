import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TP2",
  description: "Jeu Star Wars par: Anthony Saillant et Lorik Parent",
  base: "/appweb-trpr02_doc/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Revues de code",
        items: [
          { text: "Anthony Saillant semaine 1", link: "/Anthony-semaine1" },
          { text: "Lorik Parent semaine 1", link: "/Lorik-semaine1" },
          { text: "Lorik Parent semaine 2", link: "/Lorik-semaine2" },
          { text: "Anthony Saillant semaine 2", link: "/Anthony-semaine2" },
        ],
      },
    ],
  },
});
