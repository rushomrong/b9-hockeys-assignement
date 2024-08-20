/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    colors: {
      "btn-primary-r": ["#FF4240"],
      active_color: ["#FF4240"],
      search_btn: ["#89898B"],
      card_color: ["#131318"],
      primary_black: ["#000000"],
    },
  },
  plugins: [require("daisyui")],
};
