import { lazy } from "react";
import type { RouteObject } from "react-router";

// 路由懒加载
const Home = lazy(() => import("@/views/Home/index"));
const Data = lazy(() => import("@/views/Data/index"));

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/data",
		element: <Data />
	}
];

export default routes;
