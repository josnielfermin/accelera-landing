import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    /* fontFamily: {
      'chakra-petch': ['Chakra Petch', 'sans-serif'],
    }, */
    transitionDuration: {
      DEFAULT: '300ms',
      '300': '300ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'linear',
    },
    extend: {
      backgroundImage: {
        'condoms-gradient':
          'linear-gradient(180deg, #FFF 72.26%, rgba(153, 153, 153, 0.00) 100%)',
      },
      keyframes: {
        'toast-in': {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
        progress: {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
        'scale-shak': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        show: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'toast-in': 'toast-in 250ms linear',
        progress: 'progress 3s linear',
        'scale-shak': 'scale-shak 2s infinite alternate',
        show: 'show 300ms linear',
        'show-reverse': 'show 300ms linear reverse',
      },
      lineHeight: {
        normal: 'normal',
      },
      colors: {
        'palm-green': {
          '50': '#f2fbf3',
          '100': '#e2f6e4',
          '200': '#c6ecc9',
          '300': '#99dc9f',
          '400': '#65c36d',
          '500': '#40a74a',
          '600': '#308939',
          '700': '#286d2f',
          '800': '#245729',
          '900': '#1f4824',
          '950': '#0a1f0d',
        },
        'pastel-green': {
          '50': '#f0fdf0',
          '100': '#ddfbde',
          '200': '#bcf6bf',
          '300': '#88ed90',
          '400': '#5cde66', // main
          '500': '#25c232',
          '600': '#19a024',
          '700': '#177e20',
          '800': '#18631e',
          '900': '#15521b',
          '950': '#062d0b',
        },
        woodsmoke: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#151515',
        },
        shark: {
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#d0d0d1',
          '300': '#afb0b1',
          '400': '#86868a',
          '500': '#6b6b6f',
          '600': '#5b5b5f',
          '700': '#4e4f50',
          '800': '#444446',
          '900': '#3c3c3d',
          '950': '#222223', // Background
        },
      },
      screens: {
        xs: '530px',
        xxs: '415px',
        xl1: '1400px',
        xl2: '1580px',
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1740px',
      },
    },
  },
  plugins: [],
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};

export default config;
