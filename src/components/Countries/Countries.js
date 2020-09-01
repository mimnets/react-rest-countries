import React from 'react';
import { useHistory } from 'react-router-dom';

const Countries = (props) => {
    const {name, region, alpha3Code} = props.country;

    const history = useHistory() 
    const handleCountyName = (countryName) => {
        const url = `/country/${countryName}`;
        history.push(url);
    }

    const countryStyle = {
        border: '1px solid gray',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Country Name : {name}</h2>
            <p>Region : {region}</p>
            <button onClick={ () => handleCountyName(alpha3Code)}>Country Details </button>
        </div>
    );
};

export default Countries;