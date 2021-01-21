import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import App from "./App";
import ContextProvider from "./Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  rootElement
);
