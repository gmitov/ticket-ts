import { Bar } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";
import { useStatistics } from "../hooks/statisticsHook";

import { CircularSpinner } from "../../../components/spinners/CircularSpinner";

Chart.register(...registerables);

const TicketChart: React.FC = () => {
  const { data, options, loading } = useStatistics();

  if (loading) {
    return <CircularSpinner />;
  }

  return <Bar data={data} options={options} />;
};

export default TicketChart;
