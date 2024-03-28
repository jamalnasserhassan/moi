import { Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const Blank = () => {

	const location = useLocation();
	const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

	return (
		<section className={`App page--${pathSegments.join('-')}`}>
			<section className="Main">
				<Outlet />
			</section>
		</section>
	);
};
