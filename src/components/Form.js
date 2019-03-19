import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const Form = props => (
    <form onSubmit={props.getWeather}>
<h3>Notifications</h3>
    <label>email</label>
        <input type="text" name="city" placeholder="gardener@greenhouse.com" /><br/>
<label>text</label>
        <input type="text" name="country" placeholder="123-GRO-MORE" /><br/>


        <h3>Environmental Conditions</h3>
        <label>Temperature</label>
        <input type="text" name="temperature" placeholder="70" />
        <input type="text" name="t_deviation" placeholder="5" /><br/>
        <label>Humidity</label>
        <input type="text" name="humidity" placeholder="50%" />
        <input type="text" name="h_deviation" placeholder="10%" /><br/>
        <label>Light Intensity</label>
        <input type="text" name="light" placeholder="8000 lm" />
        <input type="text" name="l_deviation" placeholder="1000 lm" /><br/>
        <label>Barometric Pressure</label>
        <input type="text" name="pressure" placeholder="30.2" />
        <input type="text" name="p_deviation" placeholder=".5" /><br/>

        <Button variant="contained" color="primary">
          Update
        </Button>
    </form>
);

export default Form;
