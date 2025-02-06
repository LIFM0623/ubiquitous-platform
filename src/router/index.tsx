import { Navigate, type RouteObject } from 'react-router';

// 路由懒加载
import { Collect, Data, Help, Home, Method, Query, Result, Source, Tag, Tool } from './lazy_components';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/data',
    element: <Data />,
    children: [
      {
        path: '',
        element: <Navigate to="source" replace />, // 自动重定向到 /data/source
      },
      {
        path: 'source',
        element: <Source />,
      },
      {
        path: 'collect',
        element: <Collect />,
      },
      {
        path: 'query',
        element: <Query />,
      },
    ],
  },
  {
    path: '/tag',
    element: <Tag />,
    children: [
      {
        path: '',
        element: <Navigate to="source" replace />, // 自动重定向到 /data/source
      },
      {
        path: 'method',
        element: <Method />,
      },
      {
        path: 'tool',
        element: <Tool />,
      },
      {
        path: 'result',
        element: <Result />,
      },
    ],
  },
  {
    path: '/platform-help',
    element: <Help />,
  },
];

export default routes;
