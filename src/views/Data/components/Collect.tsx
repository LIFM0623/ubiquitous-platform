import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Collect: React.FC<IProps> = () => {
  return <div>我是数据采集</div>;
};

export default memo(Collect);
