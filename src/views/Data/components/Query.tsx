import React, { memo, useCallback, useEffect, useState } from 'react';

import { Button, Input, message, Pagination, Radio, RadioChangeEvent, Select, Table } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';

import { searchDataQuery } from '@/api';
import { dqQuery } from '@/api/type/apiType';
import dataQueryConfig from '@/config/DataQueryConfig';
import { ResultEnum } from '@/enum/httpEnum';

interface IProps {
  children?: React.ReactNode;
}

interface CollectItem {
  _id: string;
  crawler: string;
  description: string;
  source: string;
  recordDatetime: string;
  content: string;
}

const plainOptions: CheckboxGroupProps<string>['options'] = [
  { label: '文本', value: 'text' },
  { label: '图像', value: 'img' },
  { label: '图表', value: 'chart' },
  { label: '地图', value: 'map' },
  { label: '音频', value: 'audio' },
  { label: '视频', value: 'video' },
];

const Query: React.FC<IProps> = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [type, setType] = useState<'text' | 'img' | 'chart' | 'map' | 'audio' | 'video'>('text');
  const [select, setSelect] = useState<string>('source');
  const [tableData, setTableData] = useState<CollectItem[]>([]);
  const [keyword, setKeyword] = useState('');
  const [totalPage, setTotalPage] = useState(0);

  const onRadioChange = async ({ target: { value } }: RadioChangeEvent) => {
    setType(value);
    setSelect(dataQueryConfig[value as 'text' | 'img' | 'chart' | 'map' | 'audio' | 'video'].searchCons[0].value);
    getQueryList(dataQueryConfig[value as 'text' | 'img' | 'chart' | 'map' | 'audio' | 'video'].url, 1, 10);
  };

  const onSelectChange = (value: string) => {
    setSelect(value);
  };

  const search = () => {
    getQueryList(dataQueryConfig[type].url, 1, 10, {
      [select]: keyword,
    });
  };

  const getQueryList = useCallback(
    async (url: string, page: number, pageSize: number, query?: dqQuery) => {
      const { data, code } = await searchDataQuery(url, page, pageSize, query);
      if (code === ResultEnum.SUCCESS) {
        setTableData((data as any).textData as CollectItem[]);
        setTotalPage((data as any).count as number);
      } else {
        messageApi.error('请求数据失败！');
      }
    },
    [messageApi],
  );

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  // 发起请求 获取数据渲染
  useEffect(() => {
    getQueryList(dataQueryConfig['text'].url, 1, 10);
  }, [getQueryList]);

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
            options={dataQueryConfig[type].searchCons}
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
        <Table<CollectItem>
          columns={dataQueryConfig[type].cols}
          dataSource={tableData}
          size="middle"
          pagination={false}
        />
        <Pagination
          className="py-4"
          defaultCurrent={1}
          defaultPageSize={10}
          total={totalPage}
          showSizeChanger={false}
          align="end"
          onChange={(page, pageSize) => {
            getQueryList(dataQueryConfig[type].url, page, pageSize, {
              [select]: keyword,
            });
          }}
        />
      </div>
    </div>
  );
};

export default memo(Query);
