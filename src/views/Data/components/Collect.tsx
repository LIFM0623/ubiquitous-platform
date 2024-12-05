import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Collect: React.FC<IProps> = () => {
  return <div>Collect</div>;
};

export default memo(Collect);
