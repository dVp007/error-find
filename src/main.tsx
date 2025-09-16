import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import ActivityPage from "./components/activity-page.tsx";
import { customTheme } from "./theme.ts";

const theme = createTheme(customTheme);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/activity/0" element={<ActivityPage index={0} />} />
          <Route path="/activity/1" element={<ActivityPage index={1} />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
