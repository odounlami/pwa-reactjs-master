module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 200: "#e5e8ea", 900: "#121217" },
        white: { A700: "#ffffff" },
        blue: { 600: "#197fe5" },
        indigo: { 200: "#93adc6" },
        blue_gray: { 900: "#233547" },
        red_200: "#c69393",
      },
      boxShadow: {},
      fontFamily: { lexend: "Lexend" },
    },
  },
  
};
