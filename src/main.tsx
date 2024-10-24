import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/Views/App";
import "@assets/css/index.css";
import "@public/font/font.css";
import { ChakraProvider } from "@chakra-ui/react";
import "./i18";
import theme from "../chakra.config";
import store from "@/State/Store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
