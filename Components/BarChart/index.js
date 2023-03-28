import { useState, useEffect } from "react";
import styles from "./BarChart.module.css";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["NB", "Quebec", "Ontario", "MB", "Sask"],
      datasets: [
        {
          label: "Cars Loaded and Billed Today",
          data: [1, 54, 141, 618, 3424],
          borderColor: "rgb(53, 163, 235)",
          backgroundColor: "rgba(53, 163, 235, 0.4)",
        },
      ],
    });

    setChartOptions({
      Plugins: {
        Legend: {
          position: "top",
        },
        title: {
          display: true,
          Text: "Provinces",
        },
      },
      mainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
