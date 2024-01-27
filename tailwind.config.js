module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        customBlue: '#40A2D8',
      },
    },
  },
  plugins: [
    require('preline/plugin')],
}