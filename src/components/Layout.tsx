import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router';

import { Dropdown, MenuProps } from 'antd';

import { tabListItem } from '@/common/type';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const navigate = useNavigate();
  const [tabsList, setTabList] = useState<tabListItem[]>([
    {
      id: '0',
      name: '首页',
      url: '/',
      active: false,
    },
    {
      id: '1',
      name: '数据资源',
      active: true,
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
      active: false,
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
      active: false,
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
      active: false,
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
      active: false,
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
      active: false,
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
      active: false,
      name: '平台帮助',
      url: '/platform-help',
    },
  ]);

  const gotoOtherPage: MenuProps['onClick'] = ({ key }) => {
    navigate('/data');
    // 改变激活状态
    setTabList((prevTabsList) =>
      prevTabsList.map((item) => {
        // 检查是否点击的是父级
        if (item.id === key) {
          if (item.url) {
            navigate(item.url); // 跳转到父级的 URL
          }
          return {
            ...item,
            active: true,
            children: item.children?.map((child) => ({ ...child, active: false })), // 确保子集不激活
          };
        }

        // 检查是否点击的是子级
        const hasActiveChild = item.children?.some((child) => child.id === key);
        if (hasActiveChild) {
          const matchedChild = item.children?.find((child) => child.id === key);
          if (matchedChild?.url) {
            navigate(matchedChild.url); // 跳转到子级的 URL
          }
          return {
            ...item,
            active: true, // 激活父级
            children: item.children && item.children.map((child) => ({ ...child, active: false })), // 确保所有子集不激活
          };
        }

        // 对于其他项，全部取消激活状态
        return {
          ...item,
          active: false,
          children: item.children?.map((child) => ({ ...child, active: false })),
        };
      }),
    );
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-[7.5vh] w-screen bg-[url('/images/ui/title_bg.png')] bg-contain bg-no-repeat">
        <div className="flex w-1/2 items-center bg-gradient-to-b from-custom-blue-start to-custom-blue-end bg-clip-text pl-[1vh] text-3xl font-semibold italic tracking-wider text-transparent">
          泛在数据信息建模平台
        </div>
        <div className="flex space-x-8">
          {tabsList.map((item: tabListItem) => {
            const menuItems: MenuProps['items'] | undefined = item.children
              ? item.children.map((child) => ({
                  key: child.id,
                  label: child.name,
                }))
              : undefined;
            if (item.children) {
              return (
                <Dropdown menu={menuItems ? { items: menuItems, onClick: gotoOtherPage } : undefined} key={item.name}>
                  <div
                    className={`text-1xl relative mt-2 flex w-36 cursor-pointer items-start justify-center py-5 text-center font-medium ${
                      item.active ? 'text-custom-tabs-yellow' : 'text-white'
                    }`}
                  >
                    {item.name}
                    {item.active && (
                      <img
                        src="/images/ui/tabs_bg.png"
                        alt="tabs背景logo"
                        className="scale-1.2 absolute bottom-6 left-0 w-full"
                      />
                    )}
                  </div>
                </Dropdown>
              );
            } else {
              return (
                <div
                  onClick={() => gotoOtherPage({ key: item.id } as any)}
                  className={`text-1xl relative mt-2 flex w-36 cursor-pointer items-start justify-center py-5 text-center font-medium ${
                    item.active ? 'text-custom-tabs-yellow' : 'text-white'
                  }`}
                >
                  {item.name}
                  {item.active && (
                    <img
                      src="/images/ui/tabs_bg.png"
                      alt="tabs背景logo"
                      className="scale-1.2 absolute bottom-6 left-0 w-full"
                    />
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="h-[90vh] w-screen">{children}</div>
      <div className="text-1xl flex h-[2.5vh] w-screen items-center justify-center text-center">
        Copyright © 2020-2021 南京师范大学-信息工程大学-中南大学. All Rights Reserved.
      </div>
    </div>
  );
};

export default memo(Layout);
