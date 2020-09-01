import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    console.log(countries);
    return (
        <div>
            <h1>Total countries : {countries.length}</h1>
            {
                countries.map(cn => <Countries country={cn}></Countries>)
            }
        </div>
    );
};

export default Home;