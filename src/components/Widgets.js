import React from 'react';
import TemperatureWidget from './TemperatureWidget';
import PressureWidget from './PressureWidget';
import HumidityWidget from './HumidityWidget';
import LightWidget from './LightWidget';


const dashdata = [
  { name: 'Temperature', Current: 90, Target: 70, Deviation: 10 },
  { name: 'Humidity', Current: 45, Target: 40, Deviation: 5 },
  { name: 'Light', Current: 8000, Target: 7500, Deviation: 500 },
  { name: 'Pressure', Current: 30.1, Target: 30.1, Deviation: .5 },
];

const Widgets = () => (
    <div>
      <TemperatureWidget current_value={64} ideal_value={73} acceptable_deviation={5} unit={'° F'}/>
      <PressureWidget/>
      <HumidityWidget/>
      <LightWidget/>
    </div>
);
export default Widgets;
