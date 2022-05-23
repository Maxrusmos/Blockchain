import './App.css';
import Converter from './components/converter/Converter';
import Menu from './components/menu/Menu';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  const [chartData, setChartData] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.coingecko.com/api/v3/coins`,
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Menu></Menu>
      <Converter coinsData={data} chartData={chartData}></Converter>
    </div>
  );
}

export default App;
