/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#af3533",

          "secondary": "#d37847",

          "accent": "#51bf3b",

          "neutral": "#352B36",

          "base-100": "#F2F5F7",

          "info": "#2F62EE",

          "success": "#21AB8B",

          "warning": "#ECA009",

          "error": "#FB452D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
