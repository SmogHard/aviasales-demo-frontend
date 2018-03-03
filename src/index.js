import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "./index.css";
import "flexboxgrid2";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";

addLocaleData(ru);

ReactDOM.render(
  <IntlProvider locale="ru">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
