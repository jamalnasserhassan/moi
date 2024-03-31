import "./News.scss";
import { lazy, useEffect, useState, Suspense } from "react";
import { initializeSlider } from "../../../components/Sliders/Index";
const NewsItem = lazy(() => import("../../News/NewsItem/index"));

const New = lazy(() => import("./NewsCard/Index"));

function News() {
	// Handle User Profile
	const [isNewsDetailsOpen, setIsNewsDetailsOpen] = useState(false);
	useEffect(() => {
		if (isNewsDetailsOpen) {
			document.body.classList.add("u-overflow");
			document.documentElement.classList.add("u-overflow");
		} else {
			document.body.classList.remove("u-overflow");
			document.documentElement.classList.remove("u-overflow");
		}
	}, [isNewsDetailsOpen]);

	const toggleUserNews = () => {
		setIsNewsDetailsOpen(!isNewsDetailsOpen);
	};

	useEffect(() => {
		// News Slider
		const newSlider = initializeSlider(".News__slider", {
			spaceBetween: 20,
			loop: true,
			slidesPerView: 3,
			breakpoints: {
				600: {
					slidesPerView: 1,
				},
				790: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1900: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
			pagination: {
				el: ".Paginatio__News",
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
						<a
							href="#"
							className="Button Button__light Button__small Button__arrow"
						>
							عرض الكل
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 16 17"
								>
									<g
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
									>
										<path d="M3.332 8.5h9.333" />
										<path d="M7.999 3.836 3.332 8.503l4.667 4.666" />
									</g>
								</svg>
							</span>
						</a>
					</div>
					<div className="News__container-content">
						<div className="News__slider swiper">
							<div className="swiper-wrapper">
								<New toggleSidebar={toggleUserNews} />
								<New toggleSidebar={toggleUserNews} />
								<New toggleSidebar={toggleUserNews} />
								<New toggleSidebar={toggleUserNews} />
							</div>
							<div className="swiper-pagination Paginatio__News"></div>
						</div>
					</div>
				</div>
			</div>
			<Suspense>
				<NewsItem
					isOpen={isNewsDetailsOpen}
					toggleSidebar={toggleUserNews}
				/>
			</Suspense>
		</section>
	);
}

export default News;
