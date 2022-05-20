import React, {useState} from 'react';
import axios from 'axios';
import {useInterval} from '../../utils';

function Converter() {
  const [currencies, setCurrencies] = useState(null);
  const apiURL = "https://api.coingecko.com/api/v3/coins/markets";

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    setCurrencies(response.data);
    console.log(response.data);
  }

  useInterval(async () => {
    const response = await axios.get(apiURL);
    setCurrencies(response.data);
    console.log(response.data);
  }, 1000);


  return (
    <div>
      <button onClick={useInterval}>test</button>
    </div>
  )
}

export default Converter