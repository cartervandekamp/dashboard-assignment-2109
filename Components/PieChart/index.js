import { useState, useEffect } from "react";
import styles from "./PieChart.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export default function PieChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      datasets: [
        {
          label: "Canadian Dollar Deposits",
          data: [57119, 33867, 60023, 62006, 63462],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#28a745",
            "#fd7e14",
            "#6c757d",
            "#007bff",
          ],
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
          Text: "Daily Revenue",
        },
      },
      mainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
