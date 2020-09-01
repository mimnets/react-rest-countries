import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {
    const {countryName} = useParams()
    const [country, setCountry] = useState({})

    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            <p>{country.name}</p>
        </div>
    );
};

export default CountryInfo;