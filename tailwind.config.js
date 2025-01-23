const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegura que todos los archivos dentro de src sean escaneados
    "./public/**/*.html",        // También incluye archivos en public
  ],
  safelist: [
    "swiper-slide-active",
  "swiper-slide-prev",
  "swiper-slide-next",
  "swiper-slide-visible",
  "swiper-slide",
  "swiper-wrapper",
  "swiper-button-next",
  "swiper-button-prev",
  "swiper-pagination-bullet",
  "swiper-pagination-bullet-active",
  "swiper-fade",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
});
