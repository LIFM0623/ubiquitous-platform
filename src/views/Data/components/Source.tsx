import React, { memo, useState } from 'react';

import { Button, Modal, Tooltip } from 'antd';

interface IProps {
  children?: React.ReactNode;
}

const Source: React.FC<IProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading] = useState(false);
  const urlList = [
    {
      id: 0,
      name: '百度',
      url: '#',
      logo: '/public/images/logo/中国新闻网.png',
    },
    {
      id: 1,
      name: '搜狐',
      url: '#',
      logo: '/public/images/logo/中国经济网.png',
    },
    {
      id: 2,
      name: '字节',
      url: '#',
      logo: '/public/images/logo/央视新闻.png',
    },
    {
      id: 3,
      name: '网易',
      url: '#',
      logo: '/public/images/logo/海外网.png',
    },
  ];

  const handleModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // 发起请求 获取数据渲染
  return (
    <div className="h-full w-full">
      <div className="w-full">
        来源:
        <Tooltip title="新增" placement="bottom">
          <Button shape="circle" size="small" onClick={() => setIsModalOpen(true)}>
            +
          </Button>
        </Tooltip>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 gap-4 border">
          {urlList.map((item) => {
            return (
              <div key={item.id} className="h-full w-full border">
                <img src={item.logo} alt={item.name} />
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      {/* 模态弹框 新增 */}
      <Modal
        title="添加来源"
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        footer={[
          <Button key="back" onClick={handleModalCancel}>
            取消
          </Button>,
          <Button key="submit" loading={loading} type="primary" onClick={handleModalOk}>
            保存
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default memo(Source);
