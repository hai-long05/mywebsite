/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "primary-bg-color": "var(--primary-bg-color)",
        "secondary-bg-color": "var(--secondary-bg-color)"
      },
      keyframes: {
        slideRight: {
          '0%': {
            transform: 'translateX(-100px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        slideTop: {
          '0%': {
            transform: 'translateY(100px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideBottom: {
          '0%': {
            transform: 'translateY(-100px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(100px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        zoomIn: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
      },
      animationDelay: {
        1600: "1600ms",
        1800: "1800ms"
      },
       animation: {
        'slide-top': 'slideTop .5s ease forwards',
        'slide-left': 'slideLeft 1s ease forwards',
        'slide-right': 'slideRight 1s ease forwards',
        'slide-bottom': 'slideBottom 1s ease forwards',
        'zoom-in': 'zoomIn 1s ease forwards',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

