import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = () => {
  return <div>Layout</div>;
};

export default memo(Layout);
