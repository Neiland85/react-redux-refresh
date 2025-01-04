import React, { useEffect, useState } from "react";

const Resultados = () => {
  const [resultados, setResultados] = useState({});

  useEffect(() => {
    fetch("/mock/resultados.json")
      .then((res) => res.json())
      .then((data) => setResultados(data));
  }, []);

  return (
    <div>
      <h1>Resultados del Ganxotapa</h1>
      <ul>
        {Object.entries(resultados).map(([id, votos]) => (
          <li key={id}>Tapa ID: {id} - Votos: {votos}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resultados;

