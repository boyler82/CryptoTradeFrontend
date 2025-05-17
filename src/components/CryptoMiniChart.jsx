import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const CryptoMiniChart = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!symbol) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/crypto-price/${symbol}`);
        console.log("Historia ceny:", res.data);
        setData(res.data);
      } catch (e) {
        console.error("❌ Błąd pobierania historii:", e);
      }
    };

    fetchData();
  }, [symbol]);

  if (!data || data.length === 0) {
    return <p className="text-sm text-gray-500">Brak danych dla {symbol}</p>;
  }

  const chartData = {
    labels: data.map(item => new Date(item.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: `${symbol.toUpperCase()}`,
        data: data.map(item => item.priceUsd),
        fill: false,
        tension: 0.3,
      }
    ]
  };

  const options = {
    scales: {
      x: { display: false },
      y: { display: true, ticks: { callback: val => `$${val}` } },
    },
    plugins: {
      legend: { display: false },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="h-24">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CryptoMiniChart;