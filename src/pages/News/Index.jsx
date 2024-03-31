import "./News.scss";

import { lazy, useEffect, useState, Suspense } from "react";
const New = lazy(() => import("../Home/News/NewsCard/Index"));
import Breadcrumb from "../../components/Breadcrumb/Index";
import NewsItem from "./NewsItem/Index";

function News() {
	// Handle Single News
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

	return (
		<section className="Page">
			<div className="Page__header">
				<div className="Page__header-container">
					<div
						className="Page__header-background"
						style={{
							backgroundImage: "url(/images/hero-2nd.png)",
						}}
					></div>
					<div className="Page__header-padding">
						<div className="Page__header-content">
							<Breadcrumb />
						</div>
					</div>
				</div>
			</div>

			<div className="Page__Content">
				<section className="Section Section--width Section--statistics Section--top">
					<div className="container">
						<section className="Section--card Section--gray">
							<div className="Section__header header--bottom">
								<div className="Section__header-title mb-2 mb-lg-3">
									<div className="d-flex align-items-center">
										<h1 className="mb-0">جميع الاخبار</h1>
										<span className="Badge">16</span>
									</div>
								</div>
							</div>

							<div className="Section__content">
								<div className="row">
									<div className="col-lg-4 mb-3 col-md-6">
										<New toggleSidebar={toggleUserNews} />
									</div>
									<div className="col-lg-4 mb-3 col-md-6">
										<New toggleSidebar={toggleUserNews} />
									</div>
									<div className="col-lg-4 mb-3 col-md-6">
										<New toggleSidebar={toggleUserNews} />
									</div>
									<div className="col-lg-4 mb-3 col-md-6">
										<New toggleSidebar={toggleUserNews} />
									</div>
									<div className="col-lg-4 mb-3 col-md-6">
										<New toggleSidebar={toggleUserNews} />
									</div>
									<div className="col-lg-4 mb-3 col-md-6">
										<New toggleSidebar={toggleUserNews} />
									</div>
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>

			<NewsItem
				isOpen={isNewsDetailsOpen}
				toggleSidebar={toggleUserNews}
			/>
		</section>
	);
}
export default News;
