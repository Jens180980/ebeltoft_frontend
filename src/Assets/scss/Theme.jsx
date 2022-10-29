// In here you can change the theme colors, fonts, and fontsizes of the entire site

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    lightblue: "#bbccd9",
    darkblue: "#80a7bf",
    green: "#aebf35",
    dark: "#0a2434",
    overlay: "rgba(255, 255, 255, 0.4)",
  },
  fontSerif: ["freight-text-pro", "serif"],
  fontSansSerif: ["freight-sans-pro", "sans-serif"],
  fontSize: {
    p: "1.2em",
    h4: "1.8em",
    h3: "2.6em",
    h2: "3.5em",
    h1: "5em",
    button: "2em",
    navItems: "1.1em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
