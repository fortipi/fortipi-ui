import React from 'react';
import PropTypes from 'prop-types';
import TemperatureWidget from './TemperatureWidget';
import PressureWidget from './PressureWidget';
import HumidityWidget from './HumidityWidget';
import LightWidget from './LightWidget';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: 20,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});

const dashdata = [
  { name: 'Temperature', Current: 90, Target: 70, Deviation: 10 },
  { name: 'Humidity', Current: 45, Target: 40, Deviation: 5 },
  { name: 'Light', Current: 8000, Target: 7500, Deviation: 500 },
  { name: 'Pressure', Current: 30.1, Target: 30.1, Deviation: .5 },
];

function Widgets(props) {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Video Here
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Temperature
                </Typography>
                <TemperatureWidget current_value={64} ideal_value={73} acceptable_deviation={5} unit={'° F'}/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Humidity
                </Typography>
                <HumidityWidget current_value={43} ideal_value={45} acceptable_deviation={5} unit={'% g'}/>
            </Paper>
          </Grid>

          <Grid item Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Pressure
                </Typography>
                <HumidityWidget current_value={43} ideal_value={45} acceptable_deviation={5} unit={'% g'}/>
            </Paper>
          </Grid>
          <Grid item Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Light Exposure
                </Typography>
                <TemperatureWidget current_value={8000} ideal_value={7500} acceptable_deviation={500} unit={' lm'}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
}

Widgets.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Widgets);
