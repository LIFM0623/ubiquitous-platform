import { http } from './axios';
import { addDSInterface, dcQuery, dqQuery, dsQuery } from './type/apiType';

// ==================== DataSource接口 ================
export const searchDataSource = async (query?: dsQuery) => {
  return await http.get('/dataSource/search', query);
};

export const addDataSource = async (formData: addDSInterface) => {
  return await http.post('/dataSource/add', formData);
};

// =================== DataCollect接口 ================
export const searchDataCollect = async (url: string, page: number, pageSize: number, query?: dcQuery) => {
  return await http.get(`/${url}/${page}/${pageSize}`, query);
};

// ================== DataQuery 接口 ==================
export const searchDataQuery = async (url: string, page: number, pageSize: number, query?: dqQuery) => {
  return await http.get(`/${url}/${page}/${pageSize}`, query);
};
