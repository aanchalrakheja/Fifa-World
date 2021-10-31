import React from "react";
import { Radar } from 'react-chartjs-2';
import "../css/profile-graph.css";


function GraphComponent({index}){
  
  const data = {
    labels: ['Crossing', 'Finishing', 'Heading Accuracy', 'Short Passing', 'Volleys'],
    datasets: [
      {
        data: [index.crossing, index.finishing, index.headingAccuracy, index.shortPassing, index.volleys],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },
    ],
  };
  
  const options = {
    scale: {
      ticks: { beginAtZero: false,
        max:90,
        min:10,
        Stepsize:10
    },
    },
    plugins: {
      legend: {
        display: false
      }
    },
    font: {
      family:'Raleway',
      weight:700
  }
  };
  
    return(
        <div className="profile-graph">
            <Radar data={data} options={options} /> 
        </div>
    );
}

export default GraphComponent;