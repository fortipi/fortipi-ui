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
    fontSize:'3em',
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
  tempIcon: {

  }
});
class HumidityWidget extends Component {
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
    <HumidityIcon
      className={data.icon}
      style={{ fontSize: '10em' }}
      color="primary"
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
        <h1 className="widget">40%</h1>
        <p className="title-container__subtitle">
          {data.ideal_value}
          {data.acceptable_deviation}
        </p>
    </div>
  );
  }
}

function HumidityIcon(props) {
  return (
    <SvgIcon {...props} className="tempIcon">
      
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </SvgIcon>
  );
}

function SvgIcons(props) {
  const { classes } = props;
  return (
    <div className="tempicon">

    </div>
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(HumidityWidget);
