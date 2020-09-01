import React, { useEffect, useState } from 'react';

const CountryInfo = () => {
    const [country, setCountry] = useState({})
    let name = country;
    const url = `https://restcountries.eu/rest/v2/name/${country}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default CountryInfo;