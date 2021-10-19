module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme:
  {
    extend:
    {
      colors:
      {
        primary: {
          '50': '#fff4f4',
          '100': '#ffe8ea',
          '200': '#ffc6c9',
          '300': '#ffa4a9',
          '400': '#fe5f69',
          '500': '#fe1b28',
          '600': '#e51824',
          '700': '#bf141e',
          '800': '#981018',
          '900': '#7c0d14'
        }
      },
    },
    // container:
    // {
    //   padding:
    //   {
    //     default: "1rem",
    //     sm: "3rem",
    //     lg: "4rem",
    //     xl: "6rem"
    //   }
    // }
  },
  variants:
  {
    extend: {},
  },
  plugins: [],
}
