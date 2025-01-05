import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Resultados = ({ resultados }: { resultados: { id: number; votos: number }[] }) => {
  const data = {
    labels: resultados.map((res) => `Tapa ID: ${res.id}`),
    datasets: [
      {
        label: "Votos",
        data: resultados.map((res) => res.votos),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h1>Resultados del Ganxotapa</h1>
      <Bar data={data} />
    </div>
  );
};

export default Resultados;
