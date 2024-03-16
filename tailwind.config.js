/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/index.html'],
  theme: {
    extend: {
      colors: {
        'night': '#0B0C0C',
        'gunMental': '#2A2E34',
        'antiFlashWhite': '#E9EAEC',
        'schoolBusYellow': '#FBE134',
        'saffron': '#E4B61A'
      },
      fontFamily: {
        'sans': ['Fredoka', 'sans-serif'],
        'comic': ['Comic Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

