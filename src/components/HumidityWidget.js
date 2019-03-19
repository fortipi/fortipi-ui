import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

const HumidityWidget = () => (
    <div>
      <p className="title-container__subtitle">
        <SettingsIcon/>
    </p>
        <h1 className="widget">40%</h1>
    </div>
);
export default HumidityWidget;
