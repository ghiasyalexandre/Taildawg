/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      scale: {
        '55': '55%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],   darkMode: "class", // Enable class-based dark mode

}