import { Pie } from "react-chartjs-2";
import {Chart as chartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { useGlobalContext } from "./context";

chartJS.register(ArcElement, Tooltip, Legend);





const PieChart = () => {

    const {income, expanse} = useGlobalContext();
    const chartData = {
        labels: ['Income', 'Expense'],
    
        datasets:[
            {
                data: [income, expanse],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }
        ]
    }
    
    const options = {
        responsive: true,
        maintainAspectRatio: false
      };


    return (
        <div style={{ width: '220px', height: '220px' }}>
            <Pie data={chartData} options={options} />
        </div>
    )
    
}

export default PieChart