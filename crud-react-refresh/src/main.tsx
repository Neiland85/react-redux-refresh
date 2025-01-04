import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tapas from "./pages/Tapas";
import Resultados from "./pages/Resultados";
import Registro from "./pages/Registro";
import Auth from "./pages/Auth";
import Restaurant from "./pages/Restaurant";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/auth" />;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
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
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
