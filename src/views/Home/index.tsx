import React, { memo } from 'react';

import { logoListItem } from '@/common/type';
import { footerLogoList } from '@/config/HomeConfig';

interface IProps {
  children?: React.ReactNode;
}

const Home: React.FC<IProps> = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-[5vh] w-screen items-center justify-center text-center text-2xl font-semibold text-white">
        泛在数据信息建模平台
      </div>
      <div className="box-border h-[91vh] w-screen border-2 border-rose-600"></div>
      <div className="box-border flex h-[4vh] w-screen">
        {footerLogoList.map((item: logoListItem) => (
          <img className="h-[3vh] px-1.5 pt-[1vh]" src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default memo(Home);
