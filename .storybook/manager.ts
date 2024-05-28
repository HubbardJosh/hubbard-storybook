import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",

    brandTitle: "Testing Theme",
    brandUrl: "http://google.com",
    brandImage: "/clipart3613130.png",
    brandTarget: "_self",
    colorSecondary: "#ffcc00",
    appBg: "#f0f0f0",
    appBorderColor: "#ccc",
    appBorderRadius: 0,
    textColor: "#333",
    barTextColor: "#666",
  }),
});
