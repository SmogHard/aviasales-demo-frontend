import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "./index.css";
import "flexboxgrid2";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { IntlProvider } from "react-intl";

ReactDOM.render(
  <IntlProvider locale="en">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
