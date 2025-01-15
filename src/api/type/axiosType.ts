import { AxiosRequestConfig } from 'axios';

// T 应该为响应类型 export const getFileTypeBySceneId = async (sceneId: string,fileType: string): Promise<ResType<FileTypeResponse>>
interface ResType<T> {
  code: number;
  message: string;
  data?: T;
}

interface Http {
  get<T>(url: string, params?: unknown, responseType?: any): Promise<ResType<T>>;
  post<T>(
    url: string,
    data?: unknown,
    cancelToken?: any,
    progressFunction?: (progressEvent: ProgressEvent) => void,
  ): Promise<ResType<T>>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<ResType<T>>;
  patch<T>(url: string, data?: unknown): Promise<ResType<T>>;
}

export type { Http };
