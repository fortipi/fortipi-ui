import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Genius..." />
        <input type="text" name="country" placeholder="Species..." />
        <button>Get Growing Requirements</button>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
    </form>
);

export default Form;
