import React from 'react'
import {Bar} from 'react-chartjs-2';

  
export const BarChart = ({ data: { confirmed, recovered, deaths, lastUpdate } ,country}) => {
  
  const barChart = (
    confirmed ? (
      <Bar
      height={200}
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#36A2EB', '#78ff60', '#FF6384'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: country.length ?  `Current state in ${country}`:"Global Data" },
        }}
      />
    ) : null
  );
  
  
  return (
      
        <div>
      
      {barChart}
        </div>
    )
}
