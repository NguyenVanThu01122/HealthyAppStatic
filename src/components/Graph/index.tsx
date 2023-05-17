import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Graph({ data }: { data: DataGraph }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,

                },
                beginAtZero: true
            },
            x: {
                border: {
                    display: false
                }
            }
        }
    };

    ChartJS.defaults.color = "white";
    ChartJS.defaults.borderColor = "#777777";

    return <Line options={options} data={data} />;
}
