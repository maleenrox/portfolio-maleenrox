/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#050505",
          dark: "#0a0a0f",
          gray: "#12121a",
          green: "#00ff66",
          blue: "#00f0ff",
          red: "#ff0055",
          text: "#a9b1d6"
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 10px rgba(0, 255, 102, 0.5), 0 0 20px rgba(0, 255, 102, 0.2)',
        'neon-blue': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.2)',
      }
    },
  },
  plugins: [],
}