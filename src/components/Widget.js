import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';
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

class Widget extends Component {
  render(){
    const data=this.props;
    const id = data.id;
    const STATUS = {
      red: red[400],
      yellow: yellow[400],
      green: green[400],
    };
    // const status_color=green[400];
    const status_color1=STATUS[data.status_color];
    const status_color2=yellow[400];
    const fillid = 'url(#gradient3)';

    const fillStyle = {
      fontSize: '10em',
      fill : status_color1,
    };


    return(
    <div>

        <SunIcon className="icon" style={fillStyle}/>
        <h1 className="widget">{data.current_value}{data.unit}</h1>
        <p className="title-container__subtitle">
          {data.ideal_value}
          {data.acceptable_deviation}
        </p>
    </div>
  );
  }
}

function SunIcon(props) {
  return (
    <SvgIcon {...props}>
      <path xmlns="http://www.w3.org/2000/svg" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>
    </SvgIcon>
  );
}

export default withStyles(styles)(Widget);
