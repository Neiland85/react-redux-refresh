import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./pages/Home";
import Tapas from "./pages/Tapas";
import Resultados from "./pages/Resultados";
import Registro from "./pages/Registro";
import Auth from "./pages/Auth";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/auth" />;
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/tapas"
          element={
            <ProtectedRoute>
              <Tapas />
            </ProtectedRoute>
          }
        />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);

