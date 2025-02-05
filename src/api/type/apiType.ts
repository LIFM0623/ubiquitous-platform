// ==================== DataSource type  ================
interface dsQuery {
  title?: string;
}
interface addDSInterface {
  title: string; // 数据源的标题
  site: string; // 数据源的站点地址
  file?: File; // 可选的上传文件
}

export type { addDSInterface, dsQuery };
