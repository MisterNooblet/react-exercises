import React from 'react';

const CountryList = ({ countries }) => (
    <ul>
        {countries.map((country) => (
            <li key={country.name}>{country.name}</li>
        ))}
    </ul>
);

export default CountryList;