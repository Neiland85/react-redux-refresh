import React, { useEffect, useState } from "react";

const Tapas = () => {
  const [tapas, setTapas] = useState([]);

  useEffect(() => {
    fetch("/mock/tapas.json")
      .then((res) => res.json())
      .then((data) => setTapas(data));
  }, []);

  const votar = (id) => {
    // Simula el envío de un voto
    alert(`Voto registrado para la tapa con ID: ${id}`);
  };

  return (
    <div>
      <h1>Tapas Participantes</h1>
      <ul>
        {tapas.map((tapa) => (
          <li key={tapa.id}>
            <h2>{tapa.nombre}</h2>
            <p>{tapa.descripcion}</p>
            <img src={tapa.imagen} alt={tapa.nombre} />
            <button onClick={() => votar(tapa.id)}>Votar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tapas;

