import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Tool: React.FC<IProps> = () => {
  return <div>Tool</div>;
};

export default memo(Tool);
