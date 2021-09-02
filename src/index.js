import React from "react";
import ReactDOM from "react-dom";
import "./Custom.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/saga/index";
import { Provider } from "react-redux";
// import { Provider } from "react-redux";
// import store from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
