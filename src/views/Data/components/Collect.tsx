import React, { memo, useCallback, useEffect, useState } from 'react';

import { Button, Input, message, Radio, RadioChangeEvent, Select, Table, TableColumnsType } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';

import { searchDataCollect } from '@/api';
import { dcQuery } from '@/api/type/apiType';
import dataCollectConfig from '@/config/DataCollectConfig';
import { ResultEnum } from '@/enum/httpEnum';

interface IProps {
  children?: React.ReactNode;
}
const plainOptions: CheckboxGroupProps<string>['options'] = ['文本', '图像', '图表', '地图', '音频', '视频'];

interface CollectItem {
  _id: string;
  caption: string;
  content: string;
  source: string;
  author: string;
  url: string;
  publishTime: string;
  accessDatetime: string;
  type: 'text' | 'image' | 'chart' | 'map' | 'audio' | 'video';
}

const columns: TableColumnsType<CollectItem> = dataCollectConfig.text.cols;

const Collect: React.FC<IProps> = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [type, setType] = useState('文本');
  const [select, setSelect] = useState<string>('source');
  const [keyword, setKeyword] = useState('');
  const [tableData, setTableData] = useState<CollectItem[]>([]);

  const onRadioChange = ({ target: { value } }: RadioChangeEvent) => {
    setType(value);
  };

  const onSelectChange = (value: string) => {
    setSelect(value);
  };
  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const search = () => {};

  const getCollectList = useCallback(
    async (page: number, pageSize: number, query?: dcQuery) => {
      const { data, code } = await searchDataCollect(page, pageSize, query);
      if (code === ResultEnum.SUCCESS) {
        setTableData((data as any).textData as CollectItem[]);
      } else {
        messageApi.error('请求数据失败！');
      }
    },
    [messageApi],
  );

  // 发起请求 获取数据渲染
  useEffect(() => {
    getCollectList(1, 10);
  }, [getCollectList]);

  return (
    <div className="h-full w-full">
      {contextHolder}
      <div className="w-full px-3 py-3">
        <Radio.Group options={plainOptions} onChange={onRadioChange} value={type} />
      </div>
      <div className="flex w-full px-3 py-3">
        <div>
          <span className="px-2 pl-0">查询条件：</span>
          <Select
            defaultValue="lucy"
            value={select}
            style={{ width: 120 }}
            options={[
              { value: 'caption', label: '标题' },
              { value: 'url', label: '来源' },
              { value: 'author', label: '作者' },
            ]}
            onChange={onSelectChange}
          />
        </div>

        <div className="mx-6">
          <span className="px-2">关键词：</span>
          <Input placeholder="关键词" className="w-40" value={keyword} onChange={onKeywordChange} />
        </div>

        <Button type="primary" onClick={search}>
          查询
        </Button>
      </div>

      <div className="w-full px-3 py-3">
        <Table<CollectItem> columns={columns} dataSource={tableData} size="middle" />
      </div>
    </div>
  );
};

export default memo(Collect);
