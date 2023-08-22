/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'switchDark': 'url(/MoonStars.svg)',
        'switchLight': 'url(/Sun.svg)',
      },
      backgroundColor: {
        'dark': '#2f2f32',
        'calendar-dark': '#1e1f25',
        'light': '#e5e5e5',
        'calendar-light': '#fafafa'
      },
      colors: {


        'dark-primary': '#FFFFFF',
        'dark-secondary': '#CCCCCC',
        'dark-ter': '#9e9e9e',
        'dark-selected': '#589C5F',
        'dark-hover': '#6bbd75',

        'light-primary': '#333333',
        'light-secondary': '#454545',
        'light-selected': '#590bd8',
        'light-text-selected': '#FFFFFF',
        'light-hover': '#7138cc',



      }
    },
  },
  plugins: [],
}