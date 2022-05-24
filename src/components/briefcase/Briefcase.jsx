import React, { useEffect, useState } from "react";
import BriefcaseChart from "./briefcaseChart/BriefcaseChart";
import "./briefcase.css";

function Briefcase(props) {
  const currencies = props.coinsData;
  const [total, setTotal] = useState(0);
  const [bitcoinCount, setBitcoinCount] = useState(0);
  const [ethereumCount, setEthereumCount] = useState(0);

  const handleChangeBitcoinCount = (e) => {
    setBitcoinCount(e.target.value);
    setTotal(ethereumCount * usdEthereum + +e.target.value * usdBitCoin);
  };

  const handleChangeEthereumCount = (e) => {
    setEthereumCount(e.target.value);
    setTotal(bitcoinCount * usdBitCoin + +e.target.value * usdEthereum);
  };

  const getBitcoinInUSD = () => {
    if (typeof currencies !== "undefined") {
      return currencies[0].market_data.current_price.usd;
    }
  };

  const getEthereumInUSD = () => {
    if (typeof currencies !== "undefined") {
      return currencies[1].market_data.current_price.usd;
    }
  };

  const usdBitCoin = getBitcoinInUSD();
  const usdEthereum = getEthereumInUSD();

  return (
    <div className="briefcase-container">

      <div className="briefcase-form">
        <h1>Briefcase</h1>
        <div className="bitcoin-briefcase">
          <h2>Bitcoin</h2>
          <input
            min={0}
            className="bitcoin-briefcase-input"
            type="number"
            value={bitcoinCount}
            onChange={handleChangeBitcoinCount}
          ></input>
        </div>

        <div className="ethereum-briefcase">
          <h2>Ethereum</h2>
          <input
            min={0}
            className="ethereum-briefcase-input"
            type="number"
            value={ethereumCount}
            onChange={handleChangeEthereumCount}
          ></input>
        </div>
        <div className="total">In total: {total}$</div>
      </div>

      <div className="briefcaseChart-form">
        <h1>Currency distribution</h1>
        <div className="chart-helper">
          <BriefcaseChart
            bitcoin={bitcoinCount}
            ethereum={ethereumCount}
          ></BriefcaseChart>
        </div>
      </div>
    </div>
  );
}

export default Briefcase;
