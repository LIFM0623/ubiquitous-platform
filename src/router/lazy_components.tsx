import { lazy } from 'react';

const Home = lazy(() => import('@/views/Home/index'));
const Data = lazy(() => import('@/views/Data/index'));
const Help = lazy(() => import('@/views/Help/index'));
const Tag = lazy(() => import('@/views/Tag/index'));
// Data 子页面
const Source = lazy(() => import('@/views/Data/components/Source'));
const Collect = lazy(() => import('@/views/Data/components/Collect'));
const Query = lazy(() => import('@/views/Data/components/Query'));
// Tag 子页面
const Method = lazy(() => import('@/views/Tag/components/Method'));
const Tool = lazy(() => import('@/views/Tag/components/Tool'));
const Result = lazy(() => import('@/views/Tag/components/Result'));

export { Collect, Data, Help, Home, Method, Query, Result, Source, Tag, Tool };
