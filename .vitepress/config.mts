import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TP3",
  description: "Jeu Star Wars par: Anthony Saillant et Lorik Parent",
  base: "/appweb-trpr02_doc/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Revues de code",
        items: [
          { text: "Anthony Saillant", link: "/anthony-saillant" },
          { text: "Lorik Parent", link: "/lorik-parent" },
        ],
      },
    ],
  },
});
