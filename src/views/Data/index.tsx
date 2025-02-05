import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '@/components/Layout';

interface IProps {
  children?: React.ReactNode;
}

const Data: React.FC<IProps> = () => {
  return (
    <Layout>
      <div className="px-2 py-4">
        <div className="flex h-[3vh] w-full items-center px-3 italic">我是面包屑部分</div>
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default memo(Data);
