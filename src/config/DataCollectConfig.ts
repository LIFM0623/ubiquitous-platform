const dataCollectConfig = {
  text: {
    title: '文本',
    url: 'text/crawler/query',
    searchCons: [
      {
        label: '标题',
        value: 'caption',
      },
      {
        label: '来源',
        value: 'source',
      },
      {
        label: '作者',
        value: 'author',
      },
    ],
    cols: [
      {
        title: '标题',
        dataIndex: 'caption',
        ellipsis: {
          showTitle: false,
        },
        className: 'pointer',
        //render: (text, record, index) => (<span style={{cursor:"pointer"}} onClick={() => this.showContent(text, record, index) }>{text}</span>)
      },
      {
        title: '来源',
        dataIndex: 'source',
        width: '200px',
        ellipsis: true,
      },
      {
        title: '作者',
        dataIndex: 'author',
        width: '200px',
        ellipsis: true,
      },
      {
        title: '网址',
        dataIndex: 'url',
        width: '350px',
        ellipsis: true,
      },
    ],
  },
};

export default dataCollectConfig;
