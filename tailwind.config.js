// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          width: {
            navbarFluid: "clamp(80.72vw, 90vw, 90.33vw)",
          },
        },
      },
    plugins: [],
  };
  