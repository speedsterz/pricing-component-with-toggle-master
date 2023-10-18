/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-blue": {
          100: "hsl(240, 78%, 98%)",
          200: "hsl(234, 14%, 74%)",
          300: "hsl(233, 13%, 49%)",
          400: "hsl(232, 13%, 33%)",
        },
        lgrad1: "hsl(236, 72%, 79%)",
        lgrad2: "hsl(237, 63%, 64%)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
