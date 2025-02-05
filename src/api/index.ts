import { http } from './axios';
import { addDSInterface, dsQuery } from './type/apiType';

// ==================== DataSource接口 ================
export const searchDataSource = async (query?: dsQuery) => {
  return await http.get('/dataSource/search', query);
};

export const addDataSource = async (formData: addDSInterface) => {
  return await http.post('/dataSource/add', formData);
};
