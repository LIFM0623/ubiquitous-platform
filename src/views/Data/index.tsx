import React, { memo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Layout from '@/components/Layout';

interface IProps {
  children?: React.ReactNode;
}

const Data: React.FC<IProps> = () => {
  const location = useLocation(); // 获取当前的 URL 路径
  const pathParts: 'source' | 'collect' | 'query' = String(location.pathname.split('/').filter(Boolean)[1]) as any; // 分割路径并去掉空值

  // data 下方子模块
  const breadcrumbMap = {
    source: '数据来源',
    collect: '数据采集',
    query: '数据查询',
  };
  return (
    <Layout>
      <div className="px-2 py-4">
        <div className="flex h-[3vh] w-full cursor-pointer items-center px-3 italic">
          数据资源<span className="mx-2">/</span>
          <span className="text-blue-600">{breadcrumbMap[pathParts]}</span>{' '}
        </div>
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default memo(Data);
