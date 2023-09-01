/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        morpheus: {
          darker: "#101010",
          dark: "#171717",
          highlight: "#8c6b05",
        },
      },
    },
    plugins: [],
  },
};
