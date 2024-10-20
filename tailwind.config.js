module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#FCEED5',
        secondary: '#003459', 
        accent: '#002A48',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};