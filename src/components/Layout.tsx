import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-[7.5vh] w-screen bg-[url('/images/ui/title_bg.png')] bg-contain bg-no-repeat">
        <div className="flex w-1/2 items-center bg-gradient-to-b from-custom-blue-start to-custom-blue-end bg-clip-text pl-[1vh] text-3xl font-semibold tracking-wider text-transparent">
          泛在数据信息建模平台
        </div>
        <div className="">我是tabs容器</div>
      </div>
      <div className="h-[92.5vh] w-screen">{children}</div>
    </div>
  );
};

export default memo(Layout);
