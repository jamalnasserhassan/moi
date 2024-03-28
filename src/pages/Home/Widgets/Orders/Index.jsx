import './Orders.scss';

import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

const Order = lazy(() => import('./Order/Index'));
import Select from '../../../../components/Fields/Select/Index';

function Orders() {
	return (
		<div className="Orders">
			<div className="Orders__container">
				<div className="Orders__container-header">
					<div className="Title">
						<h2>حالة الطلبات</h2>

						<Select placeholder='حالة الطلبات' label='' size="round" options={[
							{ value: 'pinned', label: 'معلقة' },
							{ value: 'refused', label: 'مرفوضة' },
							{ value: 'accepted', label: 'موافقة' },
						]} defaultVal='pinned' />

					</div>

					<Link to="/orders" className="Button Button__light Button__small Button__arrow">
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
				<div className="Orders__container-content">
					<Suspense>
						<Order />
					</Suspense>
				</div>
			</div>
		</div>
	)
}
export default Orders;
