// ==================== DataSource type  ================
interface dsQuery {
  title?: string;
}
interface addDSInterface {
  title: string; // 数据源的标题
  site: string; // 数据源的站点地址
  file?: File; // 可选的上传文件
}

// ==================== DataCollect type  ================
interface dcQuery {
  type?: string;
  caption?: string;
  source?: string;
  autor?: string;
}

// ==================== DataQuery type  ================
interface dqQuery {
  id?: string;
  description?: string;
  content?: string;
  source?: string;
  recordDatetime?: string;
}

export type { addDSInterface, dcQuery, dqQuery, dsQuery };
