import React, { memo, useEffect } from 'react';

import * as echarts from 'echarts';
import 'echarts-wordcloud';

import wordcloud_shape from '@/assets/images/wordcloud_shape.png';
import { WordData } from '@/common/type';
import {
  wordData_2010,
  wordData_2011,
  wordData_2012,
  wordData_2013,
  wordData_2014,
  wordData_2015,
  wordData_2016,
  wordData_2017,
  wordData_2018,
  wordData_2019,
  wordData_2020,
} from '@/config/HomeConfig';

interface IProps {
  children?: React.ReactNode;
  year: number;
}

const WordCloud: React.FC<IProps> = ({ year }) => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('wordcloud'));
    myChart.setOption(setWordOption(year));
    return () => {
      if (myChart) {
        myChart.dispose();
      }
    };
  }, [year]);
  return (
    <div id="wordcloud" className="h-full w-full">
      WordCloud
    </div>
  );
};

const setWordOption = (year: number) => {
  const wordData: WordData = {
    wordData_2010,
    wordData_2011,
    wordData_2012,
    wordData_2013,
    wordData_2014,
    wordData_2015,
    wordData_2016,
    wordData_2017,
    wordData_2018,
    wordData_2019,
    wordData_2020,
  };
  const maskImage = new Image();
  maskImage.src = wordcloud_shape;
  const option = {
    backgroundColor: 'rgba(41,46,60,0)',
    series: [
      {
        type: 'wordCloud',
        gridSize: 1,
        sizeRange: [15, 30],
        shape: 'square',
        textStyle: {
          normal: {
            color: function () {
              return (
                'rgb(' +
                Math.round(Math.random() * 255) +
                ', ' +
                Math.round(Math.random() * 255) +
                ', ' +
                Math.round(Math.random() * 255) +
                ')'
              );
            },
          },
        },
        left: 'center',
        top: 'center',
        right: null,
        bottom: null,
        width: '100%',
        height: '100%',
        data: wordData[`wordData_${year}`],
      },
    ],
  };
  return option;
};

export default memo(WordCloud);
