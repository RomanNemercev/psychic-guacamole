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
        porcelain: "#f3f4f5",
      },
      borderRadius: {
        ten: "10px",
        fifteen: "15px",
      },
      spacing: {
        "15px": "15px",
        "25px": "25px",
        "35px": "35px",
        "50px": "50px",
        "100px": "100px",
      },
      letterSpacing: {
        min: "0.01em",
        minus: "-0.028em",
      },
      fontSize: {
        "15px": "15px",
        "22px": "22px",
        "25px": "25px",
        "30px": "30px",
        "70px": "70px",
        "45px": "45px",
      },
      lineHeight: {
        norm: "normal",
      },
    },
    fontFamily: {
      proxima: ["Proxima Nova", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
