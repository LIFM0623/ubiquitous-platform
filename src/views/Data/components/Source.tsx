import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Source: React.FC<IProps> = () => {
  return <div>Source</div>;
};

export default memo(Source);
