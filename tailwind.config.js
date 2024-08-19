/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    colors: {
      "btn-primary-r": ["#FF4240"],
    },
  },
  plugins: [require("daisyui")],
};
