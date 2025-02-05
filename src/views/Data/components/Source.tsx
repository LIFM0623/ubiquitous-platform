import React, { memo, useCallback, useEffect, useState } from 'react';

import { Button, message, Modal, Tooltip } from 'antd';

import { searchDataSource } from '@/api';
import { ResultEnum } from '@/enum/httpEnum';

interface IProps {
  children?: React.ReactNode;
}

interface urlItem {
  _id: string;
  title: string;
  picture: string;
  site: string;
}

const Source: React.FC<IProps> = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading] = useState(false);
  const [urlList, setUrlList] = useState<urlItem[]>([]);

  const handleModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  const getUrlList = useCallback(async () => {
    const { data, code } = await searchDataSource();
    if (code === ResultEnum.SUCCESS) {
      setUrlList(data as urlItem[]);
    } else {
      messageApi.error('请求数据失败！');
    }
  }, [messageApi]);

  // 发起请求 获取数据渲染
  useEffect(() => {
    getUrlList();
  }, [getUrlList]);

  return (
    <div className="h-full w-full">
      {contextHolder}
      <div className="w-full px-3">
        来源:
        <Tooltip title="新增" placement="bottom">
          <Button shape="circle" size="small" onClick={() => setIsModalOpen(true)} className="mx-2">
            +
          </Button>
        </Tooltip>
      </div>
      <div className="w-full px-3 py-3">
        <div className="scrollbar flex h-[80vh] flex-wrap items-center justify-center overflow-y-auto">
          {urlList.map((item) => {
            return (
              <div key={item._id} className="mx-3 my-2 flex h-[11vh] w-[15vw] justify-center rounded-md border">
                <a href={item.site} target="_blank">
                  <img
                    className="h-[8vh] w-[15vw] rounded-md object-cover"
                    src={item.picture ? `/resource/${item.picture}` : '#'}
                    alt={item.title}
                  />
                  <div className="w-full text-center text-2xl">{item.title}</div>
                </a>
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
