import React, { memo } from 'react';

import { tabListItem } from '@/common/type';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const tabsList: Array<tabListItem> = [
    {
      id: '0',
      name: '首页',
      url: '/home',
    },
    {
      id: '1',
      name: '数据资源',
      children: [
        {
          id: '1-1',
          name: '数据来源',
          url: '/data/source',
        },
        {
          id: '1-2',
          name: '数据采集',
          url: '/data/collect',
        },
        {
          id: '1-3',
          name: '数据查询',
          url: '/data/query',
        },
      ],
    },
    {
      id: '2',
      name: '信息标签',
      children: [
        {
          id: '2-1',
          name: '标签结果',
        },
        {
          id: '2-2',
          name: '标签方法',
        },
        {
          id: '2-3',
          name: '标签工具',
        },
      ],
    },
    {
      id: '3',
      name: '信息要素',
      children: [
        {
          id: '3-1',
          name: '要素列表',
        },
        {
          id: '3-2',
          name: '要素检索',
        },
      ],
    },
    {
      id: '4',
      name: '信息溯源',
      children: [
        {
          id: '4-1',
          name: '单向溯源',
        },
        {
          id: '4-2',
          name: '过程溯源',
        },
      ],
    },
    {
      id: '5',
      name: '位置聚合',
      children: [
        {
          id: '5-1',
          name: '聚合模板',
        },
        {
          id: '5-2',
          name: '聚合任务',
        },
      ],
    },
    {
      id: '6',
      name: '动态更新',
      children: [
        {
          id: '6-1',
          name: '更新算子',
        },
        {
          id: '6-2',
          name: '更新任务',
        },
      ],
    },
    {
      id: '7',
      name: '平台帮助',
      url: '/platform-help',
    },
  ];
  return (
    <div className="h-screen w-screen">
      <div className="flex h-[7.5vh] w-screen bg-[url('/images/ui/title_bg.png')] bg-contain bg-no-repeat">
        <div className="flex w-1/2 items-center bg-gradient-to-b from-custom-blue-start to-custom-blue-end bg-clip-text pl-[1vh] text-3xl font-semibold italic tracking-wider text-transparent">
          泛在数据信息建模平台
        </div>
        <div className="">
          {tabsList.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
        </div>
      </div>
      <div className="h-[90vh] w-screen">{children}</div>
      <div className="h-[2.5vh] w-screen">
        Copyright © 2020-2021 南京师范大学-信息工程大学-中南大学. All Rights Reserved.
      </div>
    </div>
  );
};

export default memo(Layout);
