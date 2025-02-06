import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Method: React.FC<IProps> = () => {
  return <div>Method</div>;
};

export default memo(Method);
