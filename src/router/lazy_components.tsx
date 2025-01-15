import { lazy } from 'react';

const Home = lazy(() => import('@/views/Home/index'));
const Data = lazy(() => import('@/views/Data/index'));
const Help = lazy(() => import('@/views/Help/index'));
// Data 子页面
const Source = lazy(() => import('@/views/Data/components/Source'));
const Collect = lazy(() => import('@/views/Data/components/Collect'));
const Query = lazy(() => import('@/views/Data/components/Query'));

export { Collect, Data, Help, Home, Query, Source };
