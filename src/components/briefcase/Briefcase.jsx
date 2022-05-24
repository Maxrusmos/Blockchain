import React, {useEffect, useState} from 'react'
import BriefcaseChart from './briefcaseChart/BriefcaseChart'

function Briefcase(props) {
  const currencies = props.coinsData;
  const [total, setTotal] = useState(0);
  const [bitcoinCount, setBitcoinCount] = useState(0);
  const [ethereumCount, setEthereumCount] = useState(0);

  const handleChangeBitcoinCount = (e) => {
    setBitcoinCount(e.target.value);
    setTotal(ethereumCount*usdEthereum + +e.target.value*usdBitCoin);
  }

  const handleChangeEthereumCount = (e) => {
    setEthereumCount(e.target.value);
    setTotal(bitcoinCount*usdBitCoin + +e.target.value*usdEthereum);
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

  return (
    <div className='briefcase-container'>

      <div className='bitcoin-briefcase'>
        <input className='bitcoin-briefcase-input' type="number" value={bitcoinCount} onChange={handleChangeBitcoinCount}></input>
        <input className='bitcoin-accuracy-input' type="number"></input>
        <div className='buttons-container'>
          <button className='plus-button'>+</button>
          <button className='minus-button'>-</button>
        </div>
      </div>

      <div className='ethereum-briefcase'>
        <input className='ethereum-briefcase-input' type="number" value={ethereumCount} onChange={handleChangeEthereumCount}></input>
        <input className='ethereum-accuracy-input' type="number"></input>
        <div className='buttons-container'>
          <button className='plus-button'>+</button>
          <button className='minus-button'>-</button>
        </div>
      </div>

      <div className='total'>{total}</div>
      <BriefcaseChart bitcoin={bitcoinCount} ethereum={ethereumCount}></BriefcaseChart>
    </div>
  )
}

export default Briefcase;