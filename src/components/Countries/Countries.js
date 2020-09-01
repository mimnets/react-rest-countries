import React from 'react';

const Countries = (props) => {
    const {name, capital, region, timezones} = props.country;
    const countryStyle = {
        border: '1px solid gray',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Country Name : {name}</h2>
            <p>Capital City : {capital}</p>
            <p>Region : {region}</p>
            <p>TimeZone : {timezones}</p>
        </div>
    );
};

export default Countries;