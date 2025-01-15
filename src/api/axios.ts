import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 这个nprogress样式必须引入

import { ResultEnum } from '@/enum/httpEnum';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `/ubiquitous/`,
  timeout: ResultEnum.TIMEOUT,
});
// 添加请求拦截器
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    NProgress.start();
    return config;
  },
  function (error) {
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
