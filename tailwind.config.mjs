/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ideathon-red': '#FF4B41',
        'ideathon-purple': '#5F2583',
        'ideathon-grey': '#ECECEC',
      },
    },
  },
  plugins: [],
};
