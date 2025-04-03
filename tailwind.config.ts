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
        'picton-blue': {
          '50': '#f1f8fe',
          '100': '#e2f1fc',
          '200': '#bfe1f8',
          '300': '#87caf2',
          '400': '#4ab0ea',
          '500': '#1e95d9',
          '600': '#1176b8',
          '700': '#0f5f95',
          '800': '#10507c',
          '900': '#134367',
          '950': '#0d2b44',
        },
        'curious-blue': {
          '50': '#f2f8fd',
          '100': '#e4effa',
          '200': '#c2ddf5',
          '300': '#8dc2ec',
          '400': '#409bdd', // Secondary
          '500': '#2a89cd',
          '600': '#1b6bae',
          '700': '#17568d',
          '800': '#174975',
          '900': '#183f62',
          '950': '#102741',
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
