import { useState, useEffect } from "react";
import styles from "./LineChart.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export default function LineChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "Bonds",
          data: [337337, 325942, 327505, 332559, 332972],
          borderColor: "rgb(53, 163, 235)",
          backgroundColor: "rgba(53, 163, 235, 0.4)",
          fill: false,
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Government of Canada Bonds",
        },
      },
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Weeks",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Bond Value",
          },
        },
      },
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
