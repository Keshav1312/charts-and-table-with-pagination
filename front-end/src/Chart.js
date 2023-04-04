import React, { useState,useEffect } from 'react'
import moment from 'moment';
import {ResponsiveContainer,AreaChart,XAxis,Tooltip,CartesianGrid,Area, YAxis,} from "recharts";


const Chart = () => {
  const date = null;
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`http://127.0.0.1/api/chart_pagination.php`).then((result)=>{
        result.json().then((resp)=>{
        console.warn("result",resp)
          setData(resp)
        })
      })
  }, [])
  console.warn(data)
  
  return (
    <ResponsiveContainer >
      <AreaChart
        data={data}
       
        
        margin={{ top: 5, right: 30, left: 20, bottom: 30}}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          
          <linearGradient id="colorUr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis  dataKey="updated_at" angle={-45} textAnchor="end" stroke="#dddd" tick={{ fontSize: 12 }}  tickFormatter={(unixTime) => moment(unixTime).format('DD/MM/YYYY')} />
        <YAxis domain={[0, 600]}  />
        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
        <Area
          type="monotone"
          dataKey="Inlet_p"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      
         <Area
          type="monotone"
          dataKey="Outlet_p"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorUr)"
        />
         
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
