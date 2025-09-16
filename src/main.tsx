import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import Activity from "./components/activity.tsx";
const theme = createTheme({
  palette: {
    primary: {
      main: "#2599FB",
      light: "#fcfafb",
    },
    secondary: {
      main: "#C7E6FE",
    },
  },
  typography: {
    fontFamily: "sans-serif",
    h2: {
      fontWeight: 700,
      fontSize: "36px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "16px",
    },
    body1: {
      color: "text.primary",
      fontSize: "16px",
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/activity/0" element={<Activity index={0} />} />
          <Route path="/activity/1" element={<Activity index={1} />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
