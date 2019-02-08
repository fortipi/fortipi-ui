import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Genius..." />
        <input type="text" name="country" placeholder="Species..." />
        <button>Get Growing Requirements</button>
    </form>
);

export default Form;
