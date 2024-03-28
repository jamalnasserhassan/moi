import { Suspense, lazy } from 'react';
import Tour from './Tour/Index';

const Hero = lazy(() => import("./Hero/Index"));
const News = lazy(() => import("./News/Index"));
const Services = lazy(() => import("./Services/Index"));
const Widgets = lazy(() => import("./Widgets/Index"));

function Home() {
	return (
		<>
			<Suspense>
				<Hero/>
			</Suspense>
			<Suspense>
				<Services/>
			</Suspense>
			<Suspense>
				<Widgets/>
			</Suspense>
			<Suspense>
				<News/>
			</Suspense>

			<Suspense>
				<Tour/>
			</Suspense>

		</>
	);
	
}
export default Home;
