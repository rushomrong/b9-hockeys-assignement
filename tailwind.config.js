/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    colors: {
      "btn-primary-r": ["#FF4240"],
      " active_color": ["#FF4240"],
      search_btn: ["#89898B"],
    },
  },
  plugins: [require("daisyui")],
};
