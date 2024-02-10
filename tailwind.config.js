/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_authors/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'mono': 'IBM Plex Mono'
      }
    },
  },
  plugins: [],
}

