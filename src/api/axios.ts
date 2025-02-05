import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css'; // 这个nprogress样式必须引入
import { Http, ResType } from './type/axiosType';

import { ResultEnum } from '@/enum/httpEnum';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `/ubiquitous/api/`,
  timeout: ResultEnum.TIMEOUT,
});
// 添加请求拦截器
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    NProgress.start();
    return config;
  },
  function (error: InternalAxiosRequestConfig) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);
// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done();
    return response;
  },
  (err: AxiosResponse) => {
    // message.error('请求错误');
    return Promise.reject(err);
  },
);

export const http: Http = {
  get<T>(url: string, params?: unknown): Promise<ResType<T>> {
    return axiosInstance
      .get<ResType<T>>(url, {
        params,
        responseType: 'json',
      })
      .then((res) => res.data);
  },

  post<T>(url: string, data?: any, cancelToken?: any, progressFunction?: any): Promise<ResType<T>> {
    return axiosInstance({
      url: url,
      data: data,
      method: 'post',
      cancelToken: cancelToken,
      onUploadProgress: progressFunction,
    }).then((res) => res.data);
  },

  delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<ResType<T>> {
    return axiosInstance({
      url,
      method: 'delete',
      ...config,
    }).then((res) => res.data);
  },

  // Additional methods not in the Http interface, but included for completeness
  patch<T>(url: string, data: unknown = {}): Promise<ResType<T>> {
    return axiosInstance({
      url,
      data,
      method: 'patch',
    }).then((res) => res.data);
  },
};
