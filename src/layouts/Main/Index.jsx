import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import {Suspense} from "react";

import Header from "../Header/Index";
import Footer from "../Footer/Index";
import { RouteSuspended } from "../../components/RouteSuspended/Index";

import { toast } from 'react-hot-toast';
import Toast from '../Toast/Index';

export const Main = () => {

	const location = useLocation();
	const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

	const message = (
		<span>
		  طلب خادم جديد برقم <a href="">٢٦٨٣</a> مقدم من محمد الحارثي <strong>معلق لديك</strong>
		</span>
	);
	const notify = () => toast(message);

	useEffect(() => {
		notify();
	}, []);

	return (
		<>
		{/* <Toast type="pending" /> */}
		<section className={`App page--${pathSegments.join('-')}`}>

			<Suspense>
				<Header/>
			</Suspense>

			
			<section className="Main">
				<RouteSuspended>
					<Outlet />
				</RouteSuspended>
			</section>

			<Suspense>
				<Footer />
			</Suspense>

		</section>
		</>
	);
};
