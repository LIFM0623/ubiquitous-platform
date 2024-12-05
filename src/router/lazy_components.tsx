import { lazy } from 'react';

export const Home = lazy(() => import('@/views/Home/index'));
export const Data = lazy(() => import('@/views/Data/index'));
// Data 子页面
export const Source = lazy(() => import('@/views/Data/components/Source'));
export const Collect = lazy(() => import('@/views/Data/components/Collect'));
export const Query = lazy(() => import('@/views/Data/components/Query'));
