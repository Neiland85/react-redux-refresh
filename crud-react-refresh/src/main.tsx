import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./pages/Home";
import Tapas from "./pages/Tapas";
import Resultados from "./pages/Resultados";
import Registro from "./pages/Registro";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tapas" element={<Tapas />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);

