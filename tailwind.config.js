const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '101': '#f8f8f8',
          '102': '#666',
          '103': '#d0d0d0'
        }
      },
      spacing: {
        '9': '2.25rem',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '5/11': '45.4545454%',
        '6/11': '54.5454545%',
      }
    },
  },
  variants: {},
  plugins: [],
}
