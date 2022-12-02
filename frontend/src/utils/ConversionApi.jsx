import React from 'react';
import { useState } from 'react';
const ConversionApi = ({ fromcurrency, tocurrency }) => {
    const [amountConverted,setAmountConverted]=useState();
    const myHeaders = new Headers();
    myHeaders.append("apikey", "Ol0dOwtnieTW7sR2IiOyADrWSaENgxsN");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${fromcurrency}&from=${tocurrency}&amount=5000`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return (
        <div>ConversionApi</div>
    )
}

export default ConversionApi