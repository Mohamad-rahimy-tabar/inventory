module.exports = {
  content: ["./*.{html,js}", "./src/js/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik"],
      },
      backgroundImage: {
        hero: "url('/assets/image/grunge-wall-texture.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
