/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1280px",
      },
      boxShadow: {
        "header-shadow": "0 0 15px 0 rgba(0, 0, 0, 0.15)",
      },
    },
    fontFamily: {
      proxima: ["Proxima Nova", "sans-serif"],
    },
  },
  plugins: [],
};
