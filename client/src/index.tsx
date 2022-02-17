import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3003";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
