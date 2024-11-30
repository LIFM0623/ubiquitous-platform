import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Data: React.FC<IProps> = () => {
  return <div>Data</div>;
};

export default memo(Data);
