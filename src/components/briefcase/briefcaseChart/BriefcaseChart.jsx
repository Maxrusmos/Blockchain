import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Legend} from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class BriefcaseChart extends PureComponent {
  constructor(props) {
    super(props);
  }

  data = [];
  state = {
    val1: 1,
    val2: 1
  }

  componentDidMount() {
    this.data = [
      { name: 'Bitcoin', value: +this.state.val1 },
      { name: 'Ethereum', value: +this.state.val2 },
    ];
  }

  componentDidUpdate() {
    let val1 = +this.props.bitcoin;
    let val2 = +this.props.ethereum;
    this.setState({
      val1,
      val2
    });
  }

  render() {
    this.data = [
      { name: 'Bitcoin', value: +this.state.val1 },
      { name: 'Ethereum', value: +this.state.val2 },
    ];
    return (
        <PieChart width={620} height={620}>
        <Legend align="right" verticalAlign='middle' layout='vertical' height={36}/>
          <Pie
            data={this.data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={220}
            fill="#8884d8"
            dataKey="value"
          >
            {this.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    );
  }
}