import React, { memo, useEffect } from 'react';

import * as echarts from 'echarts';

interface IProps {
  children?: React.ReactNode;
  type: string;
  data: Array<{ name: string; value: number }>;
  radius: string;
}

const ChartLevel: React.FC<IProps> = ({ type, data, radius }) => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('chartlevel'));
    myChart.setOption(getOption(type, data, radius));
    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, [data, radius, type]);
  return <div id="chartlevel" className="h-full w-full"></div>;
};

const getOption = (type: string, data: Array<{ name: string; value: number }>, radius: string) => {
  return {
    yAxis: {
      type: 'category',
      data: data.map((item: { name: string; value: number }) => item.name),
      // "type": "value",
      show: type === 'bar',
      axisLine: {
        //y轴
        show: false,
      },
      axisTick: {
        //y轴刻度线
        show: false,
      },
      splitLine: {
        //网格线
        show: false,
      },
    },
    xAxis: {
      type: 'value',
      // "type": "category",
      // "data": data.map(item => item.name),
      boundaryGap: false,
      show: type === 'bar',

      axisLabel: false,
      splitLine: {
        show: false,
      },
      axisTick: {
        //y轴刻度线
        show: false,
      },
      axisLine: {
        //y轴
        show: false,
      },
    },
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      show: false,
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 1500,
      text: ['High', 'Low'],
      dimension: 0,
      inRange: { color: ['#34699a', '#408ab4', '#65c6c4', '#776d8a', '#ad6989'] },
    },
    series: [
      {
        type: type,
        radius: radius,
        data: data,
      },
    ],
    textStyle: {
      color: 'white',
    },
  };
};

export default memo(ChartLevel);
