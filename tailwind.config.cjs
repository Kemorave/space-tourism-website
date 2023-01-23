/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { keyframes: {
      wiggle: { 
        '0%': { transform: 'rotate(-30deg)' }, 
        '50%': { transform: 'rotate(30deg)' }, 
        '100%': { transform: 'rotate(0deg)' }, 
        '50%': { transform: 'rotate(-900deg)' }, 
        '100%': { transform: 'rotate(900deg)' }, 
        '100%': { transform: 'rotate(0deg)' },  
      } ,
      swap: { 
        '0%, 50%': { opacity: '0' }, 
        '50%, 100%': { opacity: '1' },
      }
    },
      animation: {
        'spin-show': 'wiggle 5s ease-in-out ',
        'swap': 'swap 3s ease-in-out ',
      },
      textColor: {
        "default": "#D0D6F9"
      },
      colors: {
        "default": "#0B0D17",
        "nav":"rgba(255, 255, 255, 0.04)",
      }
      
    },
  },
  plugins: [],
}
