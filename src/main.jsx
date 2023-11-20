import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import BarChart from './barChartComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarChart />
    <div className='downloadButtonDiv'>
      <button type='button' id='downloadButton'>Download JSON</button>
    </div>
  </React.StrictMode>
)
