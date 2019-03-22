import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

// const data = [
//   { name: 'Mon', Temperature: 90, Humidity: 60 },
//   { name: 'Tue', Temperature: 83, Humidity: 55 },
//   { name: 'Wed', Temperature: 55, Humidity: 65 },
//   { name: 'Thu', Temperature: 77, Humidity: 45 },
//   { name: 'Fri', Temperature: 50, Humidity: 53 },
//   { name: 'Sat', Temperature: 65  , Humidity: 60 },
//   { name: 'Sun', Temperature: 46, Humidity: 35 },
// ];

function SimpleLineChart(props) {
  const { data } = props;

  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="0 10" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
        <Line type="monotone" dataKey="humidity" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="pressure" stroke="#9d23ce" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
