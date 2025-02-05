import React, { memo } from 'react';

import Layout from '@/components/Layout';

interface IProps {
  children?: React.ReactNode;
}

const Help: React.FC<IProps> = () => {
  return (
    <Layout>
      <div className="box-border flex h-[3vh] w-full items-center px-3 italic">平台帮助</div>
      <div className="scrollbar flex h-[85vh] w-full flex-wrap overflow-y-auto px-10 py-4">
        <div className="w-1/2 leading-loose">
          <span className="text-xl font-semibold">本平台致力于：</span>
          <br />
          1. 收集、整理互联网中广泛分布的文本、图表、图像、地图、音频、视频六大类型的数据；
          <br />
          2. 分析、挖掘这六类数据中所包含的时间、地点、人物、事物、事件、现象、场景七类要素信息；
          <br />
          3. 构建不同主题的场景对信息进行有序聚合，并从语义、概念、位置、几何、关系、过程等方面进行更新。
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;基于此目的，收集散布于互联网中的文本、图表、图像、地图、音频、视频数据（“原数据”），
            提取其类型、结构、内容等信息（“标签”），并挖掘这些标签关联的高层信息（“七要素”）。
            为此，客户端提供了数据资源、信息标签、信息检索、信息溯源模块。在这些模块中，用户可以从不同的角度查询、
            检索原数据、标签、语义等内容。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;另外，平台还提供了位置聚合、动态更新模块。通过这两个模块，用户可以根据其所关心的某一主题，检索到与该主题相关的时间、
            地点等要素信息以及文本、视频等原始数据。如：在位置聚合下的事件聚合模块中，搜索关键字“利奇马”，可以查询到台风“利奇马”相关的时间、
            地点、人物、事物等碎片化的标签信息，以及这些标签信息的来源（文本、地图、视频等）。
          </p>
        </div>
        <div className="flex w-1/2 justify-center">
          <img src="/public/images/help_page/泛在信息聚合图.png" alt="泛在信息聚合图" />
        </div>
        <img src="/public/images/help_page/logo泛在平台.png" alt="泛在logo" />
      </div>
    </Layout>
  );
};

export default memo(Help);
