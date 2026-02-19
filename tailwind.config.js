/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "rgb(29, 52, 46)",
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif'], // custom name "poppins"
//         inter: ['Inter', 'sans-serif']       // you can add more
//       },
//     },
//   },
//   plugins: [],
// };
