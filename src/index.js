import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

const app = (
  <ThemeProvider>
    <ColorModeProvider value="dark">
      <CSSReset />
      <App />
    </ColorModeProvider>
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
