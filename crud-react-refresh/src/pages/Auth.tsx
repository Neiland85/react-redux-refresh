import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/tapas");
    } else {
      alert("Por favor, ingrese un nombre de usuario y contraseña.");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Iniciar Sesión</button>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Auth;

