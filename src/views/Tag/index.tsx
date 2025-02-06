import React, { memo } from 'react';
import { Outlet, useLocation } from 'react-router';

import Layout from '@/components/Layout';

interface IProps {
  children?: React.ReactNode;
}

const Tag: React.FC<IProps> = () => {
  const location = useLocation(); // 获取当前的 URL 路径
  const pathParts: 'method' | 'tool' | 'result' = String(location.pathname.split('/').filter(Boolean)[1]) as any; // 分割路径并去掉空值

  // data 下方子模块
  const breadcrumbMap = {
    method: '标签方法',
    tool: '标签工具',
    result: '标签结果',
  };
  return (
    <Layout>
      <div className="px-2 py-4">
        <div className="flex h-[3vh] w-full cursor-pointer items-center px-3 italic">
          信息标签<span className="mx-2">/</span>
          <span className="text-blue-600">{breadcrumbMap[pathParts]}</span>{' '}
        </div>
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default memo(Tag);
