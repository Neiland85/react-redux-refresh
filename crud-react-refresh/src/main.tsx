import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tapas from "./pages/Tapas";
import Resultados from "./pages/Resultados";
import Registro from "./pages/Registro";
import Auth from "./pages/Auth";

// Datos de ejemplo para resultados
const resultadosMock = [
  { id: 1, votos: 12 },
  { id: 2, votos: 8 },
  { id: 3, votos: 15 },
];

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/auth" />;
};

ReactDOM.render(
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
      <Route
        path="/resultados"
        element={<Resultados resultados={resultadosMock} />}
      />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

