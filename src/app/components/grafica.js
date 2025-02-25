"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Grafica = ({ data }) => {
  const labels = data.map(item => item.nombre);
  const gastos = data.map(item => parseFloat(item.gastoActual));

  const chartData = {
    labels: labels, // Nombres de las personas
    datasets: [
      {
        label: 'Gasto',
        data: gastos, // Datos de los gastos
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gasto por Persona',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Nombre',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Gasto',
        },
        beginAtZero: true,
      },
    },
    mantainAspectRatio: false,
    aspectRatio: 2
  };

  

  return <Bar data={chartData} options={options} height={1000} width={800} />
};

export default Grafica;
