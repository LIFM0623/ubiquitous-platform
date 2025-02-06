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
  img: {
    title: '图像',
    url: 'img/crawler/query',
    searchCons: [
      {
        label: '标题',
        value: 'caption',
      },
      {
        label: '描述',
        value: 'description',
      },
    ],
    cols: [
      {
        title: '标题',
        dataIndex: 'caption',
        width: '200px',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '介绍',
        dataIndex: 'description',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '发布日期',
        dataIndex: 'accessDateTime',
        width: '150px',
        ellipsis: true,
      },
      {
        title: '网址',
        dataIndex: 'source',
        width: '350px',
      },
    ],
  },
  chart: {
    title: '图表',
    url: 'chart/crawler/query',
    searchCons: [
      {
        label: '来源',
        value: 'source',
      },
      {
        label: '标题',
        value: 'title',
      },
    ],
    cols: [
      {
        title: '来源',
        dataIndex: 'source',
        width: '200px',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '标题',
        dataIndex: 'title',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '网址',
        dataIndex: 'sourceUrl',
      },
    ],
  },
  map: {
    title: '地图',
    url: 'map/crawler/query',
    searchCons: [
      {
        label: '来源',
        value: 'source',
      },
      {
        label: '时间',
        value: 'recordedTime',
      },
    ],
    cols: [
      {
        title: '来源',
        dataIndex: 'source',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '时间',
        dataIndex: 'recordedTime',
        ellipsis: true,
      },
      {
        title: '网址',
        dataIndex: 'url',
      },
    ],
  },
  audio: {
    title: '音频',
    url: 'audio/crawler/query',
    searchCons: [
      {
        label: '频道名',
        value: 'channelName',
      },
      {
        label: '节目名',
        value: 'name',
      },
    ],
    cols: [
      {
        title: '节目名',
        dataIndex: 'name',
        width: '200px',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '频道名',
        dataIndex: 'channelName',
        width: '200px',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '播出时间段',
        dataIndex: 'period',
        width: '150px',
        ellipsis: true,
      },
      {
        title: '频率',
        dataIndex: 'fm',
        width: '100px',
        ellipsis: true,
      },
      {
        title: '节目主持人',
        dataIndex: 'anchor',
        width: '150px',
        ellipsis: true,
      },
      {
        title: '网址',
        dataIndex: 'url',
      },
    ],
  },
  video: {
    title: '视频',
    url: 'video/crawler/query',
    searchCons: [
      {
        label: '来源',
        value: 'source',
      },
      {
        label: '摄像头位置',
        value: 'location',
      },
    ],
    cols: [
      {
        title: '来源',
        dataIndex: 'source',
        width: '200px',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '摄像头位置',
        dataIndex: 'location',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '网址',
        dataIndex: 'url',
      },
    ],
  },
};

export default dataCollectConfig;
