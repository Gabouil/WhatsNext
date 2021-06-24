module.exports = {
  purge: ['./index.html', './src/.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'ph': {'max': '480px'},
      'md': {'min': '481px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  variants: {
    extend: {},
    absolute: ["responsive", "hover", "focus"],
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"]
  },
  plugins: [],
}
