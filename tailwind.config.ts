import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oasis: {
          ink: "#0b1110",
          green: "#0f5d48",
          gold: "#d5a850",
          cream: "#fbf5e7",
        },
      },
      fontFamily: {
        serif: ["Georgia", "\"Times New Roman\"", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
