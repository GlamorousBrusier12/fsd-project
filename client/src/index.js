import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
