import './News.scss';
import { lazy, useEffect} from 'react';
import { initializeSlider } from '../../../components/Sliders/Index';

const New = lazy(() => import('./NewsCard/Index'));

function News() {
  useEffect(() => {
    // News Slider
	const newSlider = initializeSlider('.News__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			1199: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 2,
			},
			767: {
				slidesPerView: 2,
			}
		},
		pagination: {
			el: '.Paginatio__News',
			clickable: true,
		},
	});
    return () => {
		newSlider.destroy();
    };
  }, []);

  return (
	<section className="News">
		<div className="container">
			<div className="News__container">
				<div className="News__container-header">
					<h3>اخر الاخبار</h3>
					<a href="#" className="Button Button__light Button__small Button__arrow">
						عرض الكل
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
								<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M3.332 8.5h9.333"/>
									<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
								</g>
							</svg>
						</span>
					</a>
				</div>
				<div className="News__container-content">
					<div className="News__slider swiper">
						<div className="swiper-wrapper">
							<New />
							<New />
							<New />
							<New />
						</div>
						<div className="swiper-pagination Paginatio__News"></div>
					</div>
				</div>
			</div>
		</div>
    </section>
  );
}

export default News;
