import {lazy} from "react";
import { createBrowserRouter } from "react-router-dom";

/**
 * Layout
 */
import { Main } from "../layouts/Main/Index";
import { Blank } from "../layouts/Blank/Index";

/**
 * Pages
 */
const Home = lazy(() => import("../pages/Home/Index"));
const Orders = lazy(() => import("../pages/Orders/Index"));
const Services = lazy(() => import("../pages/Services/Index"));
const Reports = lazy(() => import("../pages/Reports/Index"));
const Statistics = lazy(() => import("../pages/Statistics/Index"));
const News = lazy(() => import("../pages/News/Index"));
const Login = lazy(() => import("../pages/Login/Index"));

/**
 * Children
 */
import NewsItem from "../pages/News/NewsItem/Index";
import ServiceOne from '../pages/Services/ServiceOne/Index';
import ServiceTwo from '../pages/Services/ServiceTwo/Index';
import ServiceThree from '../pages/Services/ServiceThree/Index';
import ServiceFour from '../pages/Services/ServiceFour/Index';


const routesTree = () => {
  return createBrowserRouter([
    {
		path: "/",
		element: <Main />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "services/*",
				element: <Services />,
				children: [
					{
						path: "service-1",
						element: <ServiceOne />,
					},
					{
						path: "service-2",
						element: <ServiceTwo />,
					},
					{
						path: "service-3",
						element: <ServiceThree />,
					},
					{
						path: "service-4",
						element: <ServiceFour />,
					},
				],
			},
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "reports",
				element: <Reports />,
			},
			{
				path: "statistics",
				element: <Statistics />,
			},
			{
				path: "news",
				element: <News />,
				children: [
				{
					path: ":id",
					element: <NewsItem />,
				},
				],
			}
		],
	},
	{
		path: "/",
		element: <Blank/>,
		children: [
			{
				path: "login",
				element: <Login />,
			},
		]
	}
  ]);
};

export { routesTree };
