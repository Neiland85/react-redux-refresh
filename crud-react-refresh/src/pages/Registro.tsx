import React, { useState } from "react";

const Registro = () => {
  const [nombre, setNombre] = useState("");

  const registrar = () => {
    alert(`Usuario registrado: ${nombre}`);
  };

  return (
    <div>
      <h1>Registro de Participantes</h1>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={registrar}>Registrarse</button>
    </div>
  );
};

export default Registro;

