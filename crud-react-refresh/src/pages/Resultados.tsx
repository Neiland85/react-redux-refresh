import React from "react";

interface ResultadoProps {
  id: string;
  votos: number;
}

const Resultados = ({ resultados }: { resultados: ResultadoProps[] }) => {
  return (
    <ul>
      {resultados.map(({ id, votos }) => (
        <li key={id}>
          Tapa ID: {id} - Votos: {votos}
        </li>
      ))}
    </ul>
  );
};

export default Resultados;

