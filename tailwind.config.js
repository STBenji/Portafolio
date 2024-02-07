import { nextui, colors } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary = '#0D4338',
        default: '#0D4338',
        secondary: '#0A342A',
        terciary: '#07261C',
        fourth: '#03170E',
        fifth: '#f5f5f5',
        sixth: '#000800',
        lighter: '#428582',
      },
    },
  },
  plugins: [nextui()],
}
