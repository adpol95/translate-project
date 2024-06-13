/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      z: '0px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#7caac2',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#f5995f',
      'orange-pick': '#d07c4f',
      'green': '#13ce66',
      'yellow': '#ffda8e',
      'gray-dark': 'rgba(47,47,47,0.5)',
      'gray': 'rgba(118,125,157,0.35)',
      'gray-light': '#d3dce6',
      'white': 'rgb(255,255,255)',
      'transp': 'rgba(255,255,255,0)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translate(0, -150%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        slideOut: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, -180%)'},
        }
      },
      animation: {
        slideIn: 'slideIn .55s ease-in-out',
        slideOut: 'slideOut .55s ease-in-out',
      }
    },
    plugins: [],
  }
};