/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Değişen satır burası
    autoprefixer: {},
  },
};

export default config;