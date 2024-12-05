import { Navigate, type RouteObject } from 'react-router';

// 路由懒加载
import { Collect, Data, Home, Query, Source } from './lazy_components';

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
];

export default routes;
