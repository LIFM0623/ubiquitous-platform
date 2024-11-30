import React, { memo } from 'react';

import { logoListItem } from '@/common/type';
import { footerLogoList } from '@/config/HomeConfig';

interface IProps {
  children?: React.ReactNode;
}

const Home: React.FC<IProps> = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex items-center justify-center text-white text-center w-screen h-[5vh] text-2xl font-semibold">
        泛在数据信息建模平台
      </div>
      <div className="w-screen h-[91vh] box-border border-2 border-rose-600"></div>
      <div className="w-screen h-[4vh] box-border flex">
        {footerLogoList.map((item: logoListItem) => (
          <img className="h-[3vh] pt-[1vh] px-1.5" src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default memo(Home);
