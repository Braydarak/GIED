module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: '#00a59e',
        turquesa80: '#29BCB3',
        turquesa65: '#65C6C0',
        turquesa50: '#8DD2CD',
        turquesa25: '#C5E6E3',
        turquesa10: '#E8F5F4',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontFamily: {
        panton: ['Panton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}