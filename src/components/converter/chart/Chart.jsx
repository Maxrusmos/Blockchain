import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from "recharts";


class Chart extends React.Component {
  state = {};
  data = [];
  urls = ["https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily", 
          "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=14&interval=daily",];

  componentDidMount() {
    const getData = async () => {
      const [result1, result2] = await Promise.all(this.urls.map((url) => fetch(url).then((res) => res.json())));
      this.setState({
        result1,
        result2
      });
      let d = new Date();
      d.setDate(d.getDate() - 15);
      for (let key in result1.prices) {
        d.setDate(d.getDate()+1);
        this.data.push({
          "name": d.getDate(),
          "Bitcoin": result1.prices[key][1],
          "Ethereum": result2.prices[key][1]
        })
      } 
    }
    getData();
  }

  render() {
    let d = new Date();
    d.setDate(d.getDate()-5);
    console.log((d).toString())
    return (
        <LineChart width={750} height={600} data={Object.values(this.data)}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Bitcoin" stroke="#0095FF" />
            <Line type="monotone" dataKey="Ethereum" stroke="#FF0000" />
        </LineChart>
    )
  };
}

export default Chart;
