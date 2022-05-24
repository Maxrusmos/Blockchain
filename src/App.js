import './App.css';
import Converter from './components/converter/Converter';
import Menu from './components/menu/Menu';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Briefcase from './components/briefcase/Briefcase';
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState();
  
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
      <Routes>
        <Route path="/" element={<Converter coinsData={data}></Converter>} />
        <Route path="briefcase" element={<Briefcase coinsData={data}></Briefcase>} />
      </Routes>
    </div>
  );
}

export default App;
