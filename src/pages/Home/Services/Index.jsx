import './Services.scss';

import { Suspense, lazy, useEffect } from 'react';
const Service = lazy(() => import('./ServiceCard/Index'));
import { initializeSlider } from '../../../components/Sliders/Index';

function Services() {
	useEffect(() => {
		// Services Slider
		const serviceSlider = initializeSlider('.Services__slider', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: false,
			breakpoints: {
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				}
			},
			pagination: {
				el: '.Pagination__service',
				clickable: true,
			},
		});
		return () => {
			serviceSlider.destroy();
		};
	}, []);

	return (
		<section className="Services">
			<div className="container">
				<div className="Services__slider swiper">
					<div className="swiper-wrapper">
						<Service/>
					</div>
					<div className="swiper-pagination Pagination__service"></div>
				</div>
			</div>
		</section>
	)
}
export default Services;
