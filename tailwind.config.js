const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.{liquid,json}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate,
        gray: colors.slate,
      },
    },
  },
  corePlugins: {
    aria: false,
  },
  plugins: [
    require("tailwindcss-attributes"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}
