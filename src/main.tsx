import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import Home from "./containers/Home";
import MyGlobalStyles from "./styles/globalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NfcContextProvider, MapContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./styles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  const { darkMode } = useContext(MapContext); // Obtém o estado do tema do contexto

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <MyGlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NfcContextProvider>
      <App />
    </NfcContextProvider>
  </StrictMode>
);