module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
