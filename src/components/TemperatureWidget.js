import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

class TemperatureWidget extends Component {
  render(){
    const current_value='65';
    const ideal_value='72';
    const acceptable_deviation='10';
    const status_color1=yellow[400];
    const status_color2=red[400];
    const unit="F";
    const data=this.props;

    return(
    <div>
      <p className="title-container__subtitle">
        {data.ideal_value}
        {data.acceptable_deviation}
        <HomeIcon
          className={data.icon}
          color="primary"
          fontSize="large"
          component={svgProps => (
            <svg {...svgProps}>
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="10%" stopColor={status_color2} />
                  <stop offset="270%" stopColor={status_color1} />
                </linearGradient>
              </defs>
              {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
            </svg>
          )}
        />
        </p>
        <h1 className="widget">{data.current_value}{data.unit}</h1>
    </div>
  );
  }
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function SvgIcons(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

    </div>
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TemperatureWidget);
