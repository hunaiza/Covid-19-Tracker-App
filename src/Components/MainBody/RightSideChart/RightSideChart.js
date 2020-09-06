import React from 'react'
import {Pie} from 'react-chartjs-2';
import './chart.css'
const data1 = {
	labels: [
		'Recoverd',
		'Death',
		'Infec'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
export const RightSideChart = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    return (
        <div className="chart-main">
            <Pie className="chart"  data={data1}/>
        </div>
    )
}
