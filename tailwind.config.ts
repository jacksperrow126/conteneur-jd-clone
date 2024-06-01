import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/flowbite/**/*.js',
  ],
  theme: {
    colors: {
      primary: '#d80d07',
      black: '#222529',
      white: '#ffffff',
      gray: {
        100: '#777777',
        200: '#4D4E50',
      },
    },
    extend: {
      // fontFamily: {
      //   sans: ['var(--myFont)'],
      // },
    },
  },
  // plugins: [require('flowbite/plugin')],
};
export default config;
