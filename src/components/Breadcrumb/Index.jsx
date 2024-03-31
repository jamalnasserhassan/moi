import { NavLink, useLocation } from "react-router-dom";

import "./Breadcrumb.scss";

const Breadcrumb = () => {
	const location = useLocation();
	const pathSegments = location.pathname
		.split("/")
		.filter((segment) => segment !== "");

	const getSegmentName = (segment) => {
		switch (segment) {
			case "statistics":
				return "الاحصائيات";
			case "orders":
				return "حالة الطلبات";
			case "reports":
				return "التقارير";
			case "news":
				return "جميع الاخبار";
			case "services":
				return "الخدمات";
			default:
				return segment;
		}
	};

	return (
		<nav className="Breadcrumb">
			<ul>
				<li>
					<NavLink to="/" className="Breadcrumb__home">
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 40 40"
							>
								<rect
									width="38.472"
									height="38.472"
									x=".734"
									y=".797"
									fill="currentColor"
									rx="19.236"
								/>
								<path
									fill="#091F4A"
									d="M21.438 14.732c0 .166.061.332.192.463l4.844 4.844-4.844 4.844a.66.66 0 0 0 0 .927.66.66 0 0 0 .927 0l5.308-5.308a.66.66 0 0 0 0-.926l-5.308-5.308a.66.66 0 0 0-.927 0 .634.634 0 0 0-.192.463Z"
								/>
								<path
									fill="#091F4A"
									d="M11.879 20.04a.66.66 0 0 0 .656.655H27.25a.66.66 0 0 0 .656-.655.66.66 0 0 0-.655-.656H12.534a.66.66 0 0 0-.656.655Z"
								/>
							</svg>
						</span>
						<span>الرئيسية</span>
					</NavLink>
				</li>

				{pathSegments.map((segment, index) => (
					<li
						key={index}
						className={
							index === pathSegments.length - 1
								? "Breadcrumb__active"
								: ""
						}
					>
						{index === pathSegments.length - 1 ? (
							<span>{getSegmentName(segment)}</span>
						) : (
							<NavLink
								to={`/${pathSegments
									.slice(0, index + 1)
									.join("/")}`}
							>
								<span>{getSegmentName(segment)}</span>
							</NavLink>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Breadcrumb;
