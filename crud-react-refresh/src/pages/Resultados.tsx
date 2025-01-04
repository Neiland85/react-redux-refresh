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

const Resultados = () => {
  const [resultados, setResultados] = useState({});
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/mock/resultados.json")
      .then((res) => res.json())
      .then((data) => {
        setResultados(data);

        // Extraer etiquetas y datos para el gráfico
        const labels = Object.keys(data).map((id) => `Tapa ID: ${id}`);
        const values = Object.values(data);

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
        position: "top",
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
    </div>
  );
};

export default Resultados;

