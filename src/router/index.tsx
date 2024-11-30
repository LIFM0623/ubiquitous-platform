import type { RouteObject } from 'react-router';

// 路由懒加载
import { Data, Home } from './lazy_components';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/data',
    element: <Data />,
  },
];

export default routes;
