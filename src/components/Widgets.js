import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Widget from './Widget.js'
import DashboardData from '../data/dashboard.json';

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

const dashdata = DashboardData;

function Widgets(props) {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>

          {dashdata.map((dashItem, index)=>{
            return <Grid item Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {dashItem.reading}
                </Typography>
                <Widget
                  current_value={dashItem.current_value}
                  unit={dashItem.unit_of_measure}
                  status_color={dashItem.status_color}/>
                </Paper>
              </Grid>
          })}

          <Grid item xs={12}>
            <Paper className={classes.paper}>Video Here
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
