import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';

import ChartBar from './components/ChartBar';
import ChartLevel from './components/ChartLevel';
import ChartNested from './components/ChartNested';
import WordCloud from './components/WordCloud';

import { logoListItem } from '@/common/type';
import { chinaProvinces, footerLogoList, tagClass, tagName, tagNameClass, worldCountries } from '@/config/HomeConfig';

interface IProps {
  children?: React.ReactNode;
}

const Home: React.FC<IProps> = () => {
  const navigate = useNavigate();
  // 固定数据
  const [chinaData4, setChinaData4] = useState(createMapData(tagNameClass));
  const [worldData4, setWorldData4] = useState(createMapData(tagNameClass));
  const [chinaData2, setChinaData2] = useState(createMapData(tagName));
  const [worldData2, setWorldData2] = useState(createMapData(tagName));
  const [chinaData3, setChinaData3] = useState(createMapData(tagClass));
  const [worldData3, setWorldData3] = useState(createMapData(tagClass));
  const [chinaData1, setChinaData1] = useState(createMapData(chinaProvinces));
  const [worldData1, setWorldData1] = useState(createMapData(worldCountries));
  const [mapType] = useState('China');
  const [year, setYear] = useState(2010);

  const data4 = mapType === 'china' ? chinaData4 : worldData4;
  const data1 = mapType === 'china' ? chinaData1 : worldData1;
  const data2 = mapType === 'china' ? chinaData2 : worldData2;
  const data3 = mapType === 'china' ? chinaData3 : worldData3;

  const { styles } = useStyle();

  // 定时器刷新表格和地图
  useEffect(() => {
    const timerYear = setInterval(() => {
      const newYear = year === 2020 ? 2010 : year + 1;
      const worldData1 = createMapData(worldCountries);
      const chinaData1 = createMapData(chinaProvinces);
      const worldData2 = createMapData(tagName);
      const chinaData2 = createMapData(tagName);
      const worldData3 = createMapData(tagClass);
      const chinaData3 = createMapData(tagClass);
      const worldData4 = createMapData(tagNameClass);
      const chinaData4 = createMapData(tagNameClass);

      setYear(newYear);
      setWorldData1(worldData1);
      setChinaData1(chinaData1);
      setWorldData2(worldData2);
      setChinaData2(chinaData2);
      setWorldData3(worldData3);
      setChinaData3(chinaData3);
      setWorldData4(worldData4);
      setChinaData4(chinaData4);
    }, 3000);

    return () => clearInterval(timerYear); // 清除定时器
  }, [year]); // 依赖于 year，年变化时会触发
  return (
    <div className="h-screen w-screen">
      <div className="flex h-[5vh] w-screen items-center justify-center text-center text-2xl font-semibold text-white">
        泛在数据信息建模平台
      </div>
      <div className="box-border flex h-[91vh] w-screen">
        <div className="h-[91vh] w-[33vw]">
          <div className="h-[45vh] w-[33vw]">
            <WordCloud year={year} />
          </div>
          <div className="mt-[1vh] h-[45vh] w-[33vw]">
            <ChartLevel type="bar" radius={'60%'} data={data4} />
          </div>
        </div>
        <div className="h-[91vh] w-[33vw]">
          <div className="box-border h-[40vh] w-[33vw]">{mapType == 'world' ? '世界地图' : '中国地图'}</div>
          <div className="mt-[1vh] h-[50vh] w-[33vw]">
            <div className="-mt-[15px] flex h-[35px] items-end justify-between text-center">
              <div
                className="relative float-left mx-auto h-[50px] w-[50px] overflow-hidden rounded-[80px_20px] bg-[rgba(242,214,235,0.3)] p-[1.5%_5px] text-[rgba(178,252,255,0.8)]"
                style={{ transform: 'translateY(60px)' }}
              >
                文本
              </div>
              <div
                className="relative float-left mx-auto h-[50px] w-[50px] overflow-hidden rounded-[80px_20px] bg-[rgba(242,214,235,0.3)] p-[1.5%_5px] text-[rgba(178,252,255,0.8)]"
                style={{ transform: 'translateY(24px)' }}
              >
                音频
              </div>
              <div
                className="relative float-left mx-auto h-[50px] w-[50px] overflow-hidden rounded-[80px_20px] bg-[rgba(242,214,235,0.1)] p-[1.5%_5px] text-[rgba(178,252,255,0.5)]"
                style={{ transform: 'translateY(14px)' }}
              >
                视频
              </div>
              <div
                className="relative float-left mx-auto h-[50px] w-[50px] overflow-hidden rounded-[80px_20px] bg-[rgba(242,214,235,0.1)] p-[1.5%_5px] text-[rgba(178,252,255,0.5)]"
                style={{ transform: 'translateY(14px)' }}
              >
                图像
              </div>
              <div
                className="relative float-left mx-auto h-[50px] w-[50px] overflow-hidden rounded-[80px_20px] bg-[rgba(242,214,235,0.3)] p-[1.5%_5px] text-[rgba(178,252,255,0.8)]"
                style={{ transform: 'translateY(24px)' }}
              >
                地图
              </div>
              <div
                className="relative float-left mx-auto h-[50px] w-[50px] overflow-hidden rounded-[80px_20px] bg-[rgba(242,214,235,0.3)] p-[1.5%_5px] text-[rgba(178,252,255,0.8)]"
                style={{ transform: 'translateY(60px)' }}
              >
                图表
              </div>
            </div>
            <div className="mt-[15px]">
              <p className="text-center text-[30px] font-[10] text-[#be9fe1]">
                <strong>2010</strong>
              </p>
            </div>
            <div className="mt-[60px] flex items-center justify-center space-x-[20px]">
              <span className="w-[100px] translate-y-[-26px] rotate-[8deg] transform p-[1px_5px] text-[rgb(255,226,255)]">
                <img src="/images/信息标签.png" className="w-[180px] opacity-100" />
              </span>
              <div className="line-height[30px] cursor-pointer p-1 px-5 text-gray-300">
                <img src="/images/World_Icon.png" className="h-[40px] w-[50px]" />
              </div>
              <div className="line-height[30px] cursor-pointer p-1 px-5 text-gray-300">
                <img src="/images/China_Icon.png" className="h-[40px] w-[50px]" />
              </div>
              <span className="w-[100px] translate-y-[-15px] rotate-[-10deg] transform p-[1px_5px] text-[rgb(255,226,255)]">
                <img src="/images/位置聚合.png" className="w-[180px] opacity-100" />
              </span>
            </div>
            <div className="pt-[50px] text-[1.6vh] text-white">
              本平台运用互联网+，人工智能，地理信息系统等技术方法，针对文本、图表、图像、地图、视频、
              音频等不同形式的泛在数据进行收集整理，并对其中包含的时间、地点、人物、事物、事件、现象与场景
              等信息要素进行处理解析，同时提供资源管理、信息标签、信息溯源、信息聚合、动态更新等应用
              服务，实现人文社会场景中泛在数据的深度挖掘与有序组织。
            </div>
            <ConfigProvider
              button={{
                className: styles.linearGradientButton,
              }}
            >
              <Space className="pt-[12px]">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  onClick={() => {
                    navigate('/data');
                  }}
                >
                  进入系统
                </Button>
              </Space>
            </ConfigProvider>
          </div>
        </div>
        <div className="h-[91vh] w-[33vw]">
          <div className="h-[45vh] w-[33vw]">
            <ChartBar type="bar" data={data1} />
          </div>
          <div className="mt-[1vh] h-[45vh] w-[33vw]">
            <ChartNested dataIn={data2} dataOut={data3} />
          </div>
        </div>
      </div>
      <div className="box-border flex h-[4vh] w-screen">
        {footerLogoList.map((item: logoListItem) => (
          <img className="h-[3vh] px-1.5 pt-[1vh]" src={item.src} alt={item.alt} key={item.id} />
        ))}
      </div>
    </div>
  );
};

// 转换数据格式
const createMapData = (
  names: string[],
): Array<{
  name: string;
  value: number;
}> => {
  return names.map((name: string) => {
    return {
      name: name,
      value: Math.round(Math.random() * 1500),
    };
  });
};

// antd 渐变按钮
const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

export default memo(Home);
