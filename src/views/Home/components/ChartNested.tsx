import React, { memo, useEffect } from 'react';

import * as echarts from 'echarts';

interface IProps {
  children?: React.ReactNode;
  dataIn: Array<{ name: string; value: number }>;
  dataOut: Array<{ name: string; value: number }>;
}

const ChartNested: React.FC<IProps> = ({ dataIn, dataOut }) => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('chartnested'));
    myChart.setOption(getOption(dataIn, dataOut));
    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, [dataIn, dataOut]);
  return <div id="chartnested" className="h-full w-full"></div>;
};

const getOption = (dataIn: Array<{ name: string; value: number }>, dataOut: Array<{ name: string; value: number }>) => {
  return {
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
        name: '',
        type: 'pie',
        radius: ['45%', '60%'],
        data: dataOut,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
      {
        name: '',
        type: 'pie',
        radius: ['0', '28%'],
        data: dataIn,
        label: {
          position: 'inner',
          fontSize: 10,
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
    textStyle: {
      color: 'white',
    },
  };
};

export default memo(ChartNested);
