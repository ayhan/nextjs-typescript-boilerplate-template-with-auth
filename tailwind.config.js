/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#027A73",
          100: "#04b0a6",
        },
        secondary: "#FFFFFF",
        success: {
          DEFAULT: "#22c55e",
        },
        danger: {
          DEFAULT: "#f43f5e",
          100: "#ff6e87",
        },
        info: {
          DEFAULT: "#eab308",
        },
      },
      ringColor: {
        DEFAULT: "#d1d5db",
      },
      spacing: {
        25: "100px",
        30: "120px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
