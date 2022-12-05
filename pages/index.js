import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A adsfasdfj osadjf opsdj fdss',
    hello: 4000,
  },
  {
    name: 'Page B',
    hello: 3000,
  },
  {
    name: 'Page C',
    hello: 2000,
  },
  // {
  //   name: 'Page D',
  //   hello: 2780,
  // },
  // {
  //   name: 'Page E',
  //   hello: 1890,
  // },
  // {
  //   name: 'Page F',
  //   hello: 2390,
  // },
  // {
  //   name: 'Page G',
  //   hello: 3490,
  // },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;

  const fireOffset = value < 3500;
  const offset = fireOffset ? -40 : 5;
  return (
    <text x={x + width - offset} y={y + height - 5} fill={fireOffset ? '#285A64' : '#fff'} textAnchor='end'>
      {value}
    </text>
  );
};

class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart layout='vertical' data={data}>
          <XAxis type='number' />
          <YAxis
            tickLine={false}
            type='category'
            tickCount={5}
            dataKey='name'
            width={100}
            tickFormatter={(value) => {
              const limit = 10; // put your maximum character
              if (value.length < limit) return value;
              return `${value.substring(0, limit)}...`;
            }}
          />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Bar layout='vertical' dataKey='hello' fill='#82ca9d' barSize={20}>
            <LabelList dataKey='hello' position='insideRight' style={{ fill: 'white' }} />
            {/* <LabelList dataKey='hello' content={renderCustomizedLabel} position='insideRight' style={{ fill: 'white' }} /> */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

const Home = () => {
  return (
    <div style={{ width: '500px', height: '280px' }}>
      <Example />
      <Example />
      <Example />
      <Example />
    </div>
  );
};

export default Home;
