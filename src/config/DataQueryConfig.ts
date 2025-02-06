const dataQueryConfig = {
  text: {
    title: '文本',
    url: 'text/meta/query',
    searchCons: [
      {
        label: '标题',
        value: 'description',
      },
      {
        label: '内容',
        value: 'content',
      },
      {
        label: '来源',
        value: 'source',
      },
      {
        label: '发布日期',
        value: 'recordDatetime',
      },
    ],
    cols: [
      {
        title: '标题',
        dataIndex: 'description',
        width: '200px',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '内容',
        dataIndex: 'content',
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
      },
      {
        title: '发布日期',
        dataIndex: 'recordDatetime',
        width: '200px',
      },
    ],
  },
  img: {
    title: '图像',
    url: 'img/meta/query',
    searchCons: [
      {
        label: '标题',
        value: 'caption',
      },
      {
        label: '描述',
        value: 'description',
      },
      {
        label: '发布时间',
        value: 'recordDateTime',
      },
      {
        label: '网址',
        value: 'website',
      },
    ],
    cols: [
      {
        title: '标题',
        dataIndex: 'caption',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '内容',
        dataIndex: 'description',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '来源',
        dataIndex: 'website',
        width: '150px',
        ellipsis: true,
      },
      {
        title: '发布日期',
        dataIndex: 'recordDatetime',
        width: '150px',
        ellipsis: true,
      },
    ],
  },
  chart: {
    title: '图表',
    url: 'chart/meta/query',
    searchCons: [
      {
        label: '标题',
        value: 'title',
      },
      {
        label: '发布时间',
        value: 'time',
      },
    ],
    cols: [
      {
        title: '标题',
        dataIndex: 'description',
        ellipsis: true,
      },
      {
        title: '内容',
        dataIndex: 'imagePath',
        width: '200px',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '来源',
        dataIndex: 'website',
        ellipsis: true,
      },
      {
        title: '记录时间',
        dataIndex: 'recordedTime',
        width: '200px',
        ellipsis: true,
      },
    ],
  },
  map: {
    title: '地图',
    url: 'map/meta/query',
    searchCons: [
      {
        label: '发布时间',
        value: 'publicTime',
      },
      {
        label: '创建时间',
        value: 'crateTime',
      },
    ],
    cols: [
      {
        title: '标题',
        dataIndex: 'mapName',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '内容',
        dataIndex: 'imagePath',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '来源',
        dataIndex: 'website',
      },
      {
        title: '时间',
        dataIndex: 'recordDatetime',
      },
    ],
  },
  audio: {
    title: '音频',
    url: 'audio/meta/query',
    searchCons: [
      {
        label: '频道名',
        value: 'channelName',
      },
      {
        label: '节目名',
        value: 'programName',
      },
      {
        label: '播出时间',
        value: 'date',
      },
    ],
    cols: [
      {
        title: '标题',
        dataIndex: 'channelName',
      },
      {
        title: '内容',
        dataIndex: 'url',
        className: 'pointer',
      },
      {
        title: '播出时间',
        dataIndex: 'date',
        width: '150px',
        ellipsis: true,
      },
      {
        title: '每日播出时间段',
        dataIndex: 'period',
        width: '150px',
        ellipsis: true,
      },
      {
        title: '频道（FM）',
        dataIndex: 'FM',
        width: '150px',
        ellipsis: true,
      },
    ],
  },
  video: {
    title: '视频',
    url: 'video/meta/query',
    searchCons: [
      {
        label: '拍摄时间',
        value: 'date',
      },
      {
        label: '摄像头位置',
        value: 'location',
      },
    ],
    cols: [
      {
        title: '标题',
        dataIndex: 'location',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '内容',
        dataIndex: 'url',
        ellipsis: true,
        className: 'pointer',
      },
      {
        title: '拍摄时间',
        dataIndex: 'date',
        //"width": "150px",
        ellipsis: true,
      },
    ],
  },
};

export default dataQueryConfig;
