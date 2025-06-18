// tailwind.config.js
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
   theme: {
    extend: {
      keyframes: {
        tilt: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)',
           },
          '50%': { transform: 'rotateX(8deg) rotateY(18deg)' ,
          
          },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg)' ,
           
          },
        },
      },
      animation: {
        tilt: 'tilt 0.6s ease-in-out forwards',
      },
    },
  },
  plugins: [flowbite],
};
