module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
    'node_modules/preline/dist/*.js',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "3rem",
      },
      colors: {
        customBlue: '#40A2D8',
        paleBlue: "#304057",
        secondGray: "#6D6D6D",
        secondBlack: "#151515",
        linearBlue: "#cce4ff",
        lightBlue: "#637C95",
      },
    },
  },
  plugins: [
    require('preline/plugin'),   require('flowbite/plugin')],
}