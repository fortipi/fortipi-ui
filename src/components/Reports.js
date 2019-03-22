import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReportData from '../data/sensordata.json';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';

const data = ReportData;
const reportStyle = {
    marginTop:20,
};

class Reports extends Component {
  render(){
    const { classes } = this.props;
    return(
    <div>
      <Typography variant="h4" gutterBottom component="h2">
        Reports
      </Typography>
      <Typography component="div">
        <SimpleLineChart data={data}/>
      </Typography>
      <div style={reportStyle}>
        <SimpleTable data={data}/>
      </div>
    </div>
  );
  }
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(reportStyle)(Reports);
