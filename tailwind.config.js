/* @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.js", "./src/*.js", "*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-background-browser": `url("/src/assets/backgrounds/bacground_ai.png")`,
        "my-background-mobile": `url("/src/assets/backgrounds/bacground_ai_mobile.png")`,
      },
    },
  },
  plugins: [],
};
