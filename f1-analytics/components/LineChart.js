import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = ({ xAxisData, yAxisData, driver }) => {
  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: driver,
        data: yAxisData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: `Lap Times for ${driver}`,
      },
    },
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Lap Time (seconds)",
          font: {
            size: 15,
          },
        },
        ticks: {
          precision: 0,
        },
      },
      xAxes: {
        title: {
          display: true,
          text: "Lap Number",
          font: {
            size: 15,
          },
        },
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
