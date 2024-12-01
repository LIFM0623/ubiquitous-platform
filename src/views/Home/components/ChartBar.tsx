import React, { memo, useEffect } from 'react';

import * as echarts from 'echarts';

interface IProps {
  children?: React.ReactNode;
  type: string;
  data: Array<{ name: string; value: number }>;
}

const ChartBar: React.FC<IProps> = ({ type, data }) => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('chartbar'));
    myChart.setOption(getOption(type, data.slice(0, 30), '60%'));
    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, [data, type]);
  return <div id="chartbar" className="h-full w-full"></div>;
};

const getOption = (type: string, data: Array<{ name: string; value: number }>, radius: string) => {
  return {
    yAxis: {
      show: type === 'bar',
      type: 'value',
    },
    xAxis: {
      boundaryGap: false,
      show: type === 'bar',
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: 90,
      },
      data: data.map((item) => item.name),
    },
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1500,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: { color: ['#34699a', '#408ab4', '#65c6c4', '#776d8a', '#ad6989'] },
    },
    series: [
      {
        type: type,
        radius: radius,
        data: data,
        itemStyle: { color: 'rgb(18,150,219)' },
      },
    ],
    textStyle: {
      color: 'white',
    },
  };
};

export default memo(ChartBar);
