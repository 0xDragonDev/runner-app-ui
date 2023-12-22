import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import AppProvider from "./providers";
import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>
);
