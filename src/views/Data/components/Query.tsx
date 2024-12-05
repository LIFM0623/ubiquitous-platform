import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Query: React.FC<IProps> = () => {
  return <div>Query</div>;
};

export default memo(Query);
