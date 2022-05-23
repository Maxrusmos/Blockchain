import React, {useState} from 'react';
import Chart from './chart/Chart';

function Converter(props) {
  const currencies = props.coinsData;
  console.log(props.chartData);
  const [valueConvertFrom, setValueConvertFrom] = useState(0);
  const [valueConvertTo, setValueConvertTo] = useState(0);
  const [selectValueFrom, setSelectValueFrom] = useState('Bitcoin');
  const [selectValueTo, setSelectValueTo] = useState('USD');

  const convert = (currentValue) => {
    switch (selectValueFrom) {
      case 'Bitcoin': { 
        if (selectValueTo === 'USD') {
          setValueConvertTo(currentValue*usdBitCoin); 
        }
        if (selectValueTo === 'Ethereum') {
          setValueConvertTo(currentValue*usdBitCoin / usdEthereum);
        }
        if (selectValueTo === selectValueFrom) {
          setValueConvertTo(currentValue);
        }
        break;
      }
      case 'Ethereum': {
        if (selectValueTo === 'USD') {
          setValueConvertTo(currentValue*usdEthereum); 
        }
        if (selectValueTo === 'Bitcoin') {
          setValueConvertTo(currentValue*usdEthereum / usdBitCoin);
        }
        if (selectValueTo === selectValueFrom) {
          setValueConvertTo(currentValue);
        }
        break;
      }
      case 'USD': {
        if (selectValueTo === 'Ethereum') {
          setValueConvertTo(currentValue / usdEthereum); 
        }
        if (selectValueTo === 'Bitcoin') {
          setValueConvertTo(currentValue / usdBitCoin);
        }
        if (selectValueTo === selectValueFrom) {
          setValueConvertTo(currentValue);
        }
        break;
      }
    }
  }

  //изменение поля ввода 
  const handleChangeFrom = (e) => {
    setValueConvertFrom(e.target.value);
    convert(e.target.value);
  }

  //выпадающий список, конвертировать из
  const handleChangeSelectFrom = (e) => {
    setSelectValueFrom(e.target.value);
  }

  //выпадающий список, конвертировать в
  const handleChangeSelectTo = (e) => {
    setSelectValueTo(e.target.value);
  }

  const getBitcoinInUSD = () => {
    if (typeof currencies !== 'undefined') {
      return currencies[0].market_data.current_price.usd;
    }
  }

  const getEthereumInUSD = () => {
    if (typeof currencies !== 'undefined') {
      return currencies[1].market_data.current_price.usd;
    }
  }

  const usdBitCoin = getBitcoinInUSD();
  const usdEthereum = getEthereumInUSD();
  //делать конверт на изменения в select
  return (
    <>
      <div className='converter-container'>

        <div className='convert-from'>
          <input className='convertFrom-input' type="number" value={valueConvertFrom} onChange={handleChangeFrom}/>
          <select value={selectValueFrom} onChange={handleChangeSelectFrom}>
            <option>Bitcoin</option>
            <option>Ethereum</option>
            <option>USD</option>
          </select>
        </div>

        <div className='convert-to'>
          <input className='convertFrom-input' type="number" value={valueConvertTo}/>
          <select value={selectValueTo} onChange={handleChangeSelectTo}>
            <option>Bitcoin</option>
            <option>Ethereum</option>
            <option>USD</option>
          </select>
        </div>

        <Chart dataForChart={props.chartData}></Chart>
      </div>
    </>
  )
}

export default Converter