/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      backgroundImage: {
        'img_bg_hero': "url('../assets/bg-hero.jpg')",
      },
      extend: {
        'primary-blue': '#106EB0',
        'primary-orange': '#EC7000',
        'primary-gray': '#33303E',
        'second-gray': '#4E4B59',
        'gray-phone': '#F4F4F4',
        'txt-gray': '#7A7786',
        'opacity-gray': 'rgba(100, 80, 57, 0.1)'
      },
    },
    plugins: [],
  }
  