import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Result: React.FC<IProps> = () => {
  return <div>Result</div>;
};

export default memo(Result);
