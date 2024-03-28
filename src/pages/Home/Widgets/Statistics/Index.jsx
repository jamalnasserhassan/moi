import './Statistics.scss';

import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const DonutChart = lazy(() => import('../../../../components/Charts/DonutChart/Index'));

function Statistics() {

	const dataOrder = [
		{ name: 'موافقة', y: 62.74 },
		{ name: 'معلقة', y: 10.57 }
	];

	const dataService = [
		{ name: ' خادم جديد', y: 49 },
		{ name: 'فتح تذكرة', y: 10 },
		{ name: 'زياره مركز', y: 41 }
	];

	return (
		<div className="Statistics">
			<div className="Statistics__container">

				<div className="Statistics__container-header">
					<h2>إحصائيات</h2>
					<Link to="/statistics" className="Button Button__light Button__small Button__arrow">
						عرض الكل
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
								<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M3.332 8.5h9.333"/>
									<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
								</g>
							</svg>
						</span>
					</Link>
				</div>

				<div className="Statistics__container-content">
					<div className="Statistics__chart">
						<div className="Statistics__chart-item">
							<div className="Title">
								<div className="Title__item">
									<div className="Title__item-img">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25">
										<path fill="currentColor" d="M22.078 6.255a3.276 3.276 0 0 0-3.271-3.27H4.27A3.275 3.275 0 0 0 1 6.254v14.478a3.254 3.254 0 0 0 3.251 3.251h14.575a3.254 3.254 0 0 0 3.252-3.25V6.254ZM4.27 4.68h14.536a1.577 1.577 0 0 1 1.575 1.575v7.917a3.246 3.246 0 0 0-1.556-.397h-.819a3.239 3.239 0 0 0-3.016 2.038 1.549 1.549 0 0 1-1.454.969H9.53a1.548 1.548 0 0 1-1.453-.97 3.24 3.24 0 0 0-3.007-2.027h-.819a3.247 3.247 0 0 0-1.555.387V6.255A1.577 1.577 0 0 1 4.27 4.68Zm16.11 16.053a1.558 1.558 0 0 1-1.555 1.555H4.251a1.558 1.558 0 0 1-1.555-1.555v-3.697a1.558 1.558 0 0 1 1.555-1.555h.82a1.546 1.546 0 0 1 1.44.969 3.239 3.239 0 0 0 3.02 2.037h4.016a3.239 3.239 0 0 0 3.019-2.037 1.545 1.545 0 0 1 1.454-.97h.818a1.558 1.558 0 0 1 1.556 1.556l-.012 3.697Z"/>
										<path fill="currentColor" fillOpacity=".6" d="M7.98 8.602h7.114a.848.848 0 1 0 0-1.696H7.98a.848.848 0 0 0 0 1.696Z"/>
									</svg>
									</div>
								</div>
								<div className="Title-item">
									<div className="Title__item-sub">
										حاله
									</div>
									<div className="Title__item-main">
										الطلبات الحاليه
									</div>
								</div>
							</div>
						</div>
						<div className="Statistics__chart-item">
							<DonutChart name="الطلبات" data={dataOrder} colors={['#14BFAD', '#F9C87C']} />
						</div>
					</div>
					<div className="Statistics__chart">
						<div className="Statistics__chart-item">
							<div className="Title">
								<div className="Title__item">
									<div className="Title__item-img">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25"><path fill="currentColor" d="M13 23.734H5c-2.42 0-3.75-1.33-3.75-3.75v-8c0-2.42 1.33-3.75 3.75-3.75h5c.41 0 .75.34.75.75v11c0 1.58.67 2.25 2.25 2.25.41 0 .75.34.75.75s-.34.75-.75.75Zm-8-14c-1.58 0-2.25.67-2.25 2.25v8c0 1.58.67 2.25 2.25 2.25h4.8c-.36-.59-.55-1.34-.55-2.25V9.734H5Z"/><path fill="currentColor" d="M10 9.734H5c-.41 0-.75-.34-.75-.75v-2c0-1.52 1.23-2.75 2.75-2.75h3.11c.23 0 .45.11.59.29.14.19.19.43.13.65-.06.22-.08.47-.08.81v3c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5v-2.5H7c-.69 0-1.25.56-1.25 1.25v1.25ZM14 14.734c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM18 14.734c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM18 23.734h-4c-.41 0-.75-.34-.75-.75v-4c0-.96.79-1.75 1.75-1.75h2c.96 0 1.75.79 1.75 1.75v4c0 .41-.34.75-.75.75Zm-3.25-1.5h2.5v-3.25c0-.14-.11-.25-.25-.25h-2c-.14 0-.25.11-.25.25v3.25Z"/><path fill="currentColor" fillOpacity=".6" d="M6 18.734c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z"/><path fill="currentColor" d="M19 23.734h-6c-2.42 0-3.75-1.33-3.75-3.75v-14c0-2.42 1.33-3.75 3.75-3.75h6c2.42 0 3.75 1.33 3.75 3.75v14c0 2.42-1.33 3.75-3.75 3.75Zm-6-20c-1.58 0-2.25.67-2.25 2.25v14c0 1.58.67 2.25 2.25 2.25h6c1.58 0 2.25-.67 2.25-2.25v-14c0-1.58-.67-2.25-2.25-2.25h-6Z"/></svg>
									</div>
								</div>
								<div className="Title-item">
									<div className="Title__item-sub">
										الخدمات
									</div>
									<div className="Title__item-main">
										الاكثر طلبا
									</div>
								</div>
							</div>
						</div>
						<div className="Statistics__chart-item">
							
							<Suspense>
								<DonutChart name="الخدمات" data={dataService} colors={['#FF8A70', '#4A48A4', '#14BFAD']} />
							</Suspense>
							
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
export default Statistics;
