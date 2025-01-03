import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);

