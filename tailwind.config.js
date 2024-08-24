/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    screens: {
      "tablet": "375px",
      // => @media (min-width: 375px) { ... }
    },
    colors: {
      'dark-cyan': 'hsl(158 36% 37%)',
      'cyan': 'hsl(158, 44%, 20%)',
      'cream': 'hsl(30 38% 92%)',
      'very-dark-blue': 'hsl(212, 21% 14%)',
      'dark-grayish-blue': 'hsl(228 12% 48%)',
      'white': 'hsl(0 0% 100%)',
    },
    fontFamily: {
      Fraunces: ["Fraunces", 'serif'],
      Montserrat: ["Montserrat", 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}

