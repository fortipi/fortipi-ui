import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Temperature (F)</TableCell>
            <TableCell align="right">Light (lm)</TableCell>
            <TableCell align="right">Humidity (rh)</TableCell>
            <TableCell align="right">Pressure (mb)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.time}
              </TableCell>
              <TableCell align="right">{n.temperature}</TableCell>
              <TableCell align="right">{n.humidity}</TableCell>
              <TableCell align="right">{n.pressure}</TableCell>
              <TableCell align="right">{n.light}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
