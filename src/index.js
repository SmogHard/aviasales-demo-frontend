import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import "flexboxgrid2";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
