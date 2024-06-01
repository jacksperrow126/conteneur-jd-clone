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
      space: '#F7F7F7',
      gray: {
        50: '#e3e3e3',
        80: '#b5b5b5',
        100: '#777777',
        200: '#4D4E50',
      },
    },
  },
  // plugins: [require('flowbite/plugin')],
};
export default config;
