import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ResultadoProps {
  id: string;
  votos: number;
}

const Resultados = () => {
  const [resultados, setResultados] = useState<ResultadoProps[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    fetch("/mock/resultados.json")
      .then((res) => res.json())
      .then((data) => {
        const resultadosArray = Object.entries(data).map(([id, votos]) => ({
          id,
          votos: votos as number,
        }));
        setResultados(resultadosArray);

        // Extraer etiquetas y datos para el gráfico
        const labels = resultadosArray.map((resultado) => `Tapa ID: ${resultado.id}`);
        const values = resultadosArray.map((resultado) => resultado.votos);

        setLabels(labels);
        setData(values);
      });
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Votos por Tapa",
        data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Resultados del Ganxotapa",
      },
    },
  };

  return (
    <div>
      <h1>Resultados del Ganxotapa</h1>
      <Bar data={chartData} options={chartOptions} />
      <ul>
        {resultados.map(({ id, votos }) => (
          <li key={id}>
            Tapa ID: {id} - Votos: {votos}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resultados;

