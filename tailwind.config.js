/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1280px",
      },
      boxShadow: {
        "header-shadow": "0 0 15px 0 rgba(0, 0, 0, 0.15)",
      },
      colors: {
        midnight: "#000D30",
        ribbon: "#0066ff",
        "slate-custom": "#79869a",
        "athens-gray": "#e8eaf2",
        whisper: "#f7f8fb",
        monza: "#E20613",
      },
      borderRadius: {
        ten: "10px",
      },
      spacing: {
        "25px": "25px",
        "50px": "50px",
      },
      letterSpacing: {
        min: "0.01em",
      },
      fontSize: {
        "22px": "22px",
        "70px": "70px",
      },
    },
    fontFamily: {
      proxima: ["Proxima Nova", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
