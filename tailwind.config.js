const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
            fontFamilt: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: "#ece0d1",
                textcol: "#38220f",
                primary: "#967259",
                secondary: "#dbc1ac",
                accent: "#634832"
            }
        },
  },
  plugins: [],
}

