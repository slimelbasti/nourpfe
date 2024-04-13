import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
Chart.register(CategoryScale);

function Barchart(props){
    const {content} = props;
   
  return (
    <div className="BarchartWrapper">
     
    </div>
  )
  }
  export default Barchart;



