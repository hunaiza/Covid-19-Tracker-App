import React from 'react'
import {Pie} from 'react-chartjs-2';
import './chart.css'

export const RightSideChart = ({ data: { confirmed, recovered, deaths, lastUpdate },country }) => {
   
	const pieChart = confirmed ? (
		<Pie
		  data={{
			labels: ["Infec", "Recover", "Deaths"],
			datasets: [
			  {
				label: "People",
				backgroundColor: ['#36A2EB', '#78ff60', '#FF6384'],
				data: [confirmed.value, recovered.value, deaths.value],
			  },
			],
		  }}
		  options={{
			legend: { display: false },
			title: {
			  display: true,
			  text: `Current state in ${country ? country : "World"}`,
			},
		  }}
		/>
	  ) : null;
	
	return (
        <div className="chart-main">
            {pieChart}
        </div>
    )
}
