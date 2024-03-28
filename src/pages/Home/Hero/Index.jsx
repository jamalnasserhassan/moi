import './Hero.scss';
import Search from "../../../components/Search/Index";

import { useEffect, useRef } from 'react';
import { initializeSlider } from '../../../components/Sliders/Index';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

function Hero() {

	const ref = useRef(null);
	const handleClick = () => {
		if ('scrollBehavior' in document.documentElement.style) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		} else {
			ref.current.scrollIntoView();
		}
	};

	useEffect(() => {
		// Intro Slider
		const introSlider = initializeSlider('.Intro__container-slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.Pagination__intro',
				clickable: true,
			},
		});
		return () => {
			introSlider.destroy();
		};
	}, []);

	return (
		<section className="Intro">
			<div className="Intro__container">
				<div className="Intro__container-slider swiper">
					<div className="swiper-wrapper">
						<div className="swiper-slide" style={{ backgroundImage: 'url(/images/hero.png)' }}>
						</div>
						<div className="swiper-slide" style={{ backgroundImage: 'url(/images/hero-2nd.png)' }}>
						</div>
						<div className="swiper-slide" style={{ backgroundImage: 'url(/images/hero-3rd.png)' }}>
						</div>
					</div>
					<div className="Intro__container-aside">
						<div className="swiper-pagination Pagination__intro"></div>
						<button className="Scroll" onClick={handleClick}>
							<span>Scroll</span>
							<span className="shape"></span>
						</button>
					</div>
				</div>

				<div className="Intro__container-flex">
					<div className="Intro__content">
						<p className="Subtitle">كفاءة أعلى لأعمالنا</p>
						<h1>عبر خدماتنا المؤتمنة</h1>
						<p>
							سهولة البحث والوصول الى جميع <strong>الخدمات</strong> المجمعه في مكان واحد
						</p>
					</div>
					<Search/>
				</div>

			</div>
			<div ref={ref}></div>
		</section>
	)
}
export default Hero;
