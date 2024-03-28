import { NavLink } from 'react-router-dom';
import ServiceImg from './ServiceImg';

const ServiceHeader = () => {
	return (
		<div className="Page__header">
			<div className="Page__header-container">
				<div className="Page__header-background" style={{ backgroundImage: 'url(/images/hero-2nd.png)' }}>
				</div>
				<div className="Page__header-padding">
					<div className="Page__header-content d-flex">
						<div className='Page__header-menu'>
							<div className='Page__menu-icon'>
								<ServiceImg/>
							</div>
							<div>
								<strong className='Page__menu-title'>طلب زياره مركز البيانات</strong>
								<div className='Page__menu-content'>
									<NavLink to="/" className="Breadcrumb__home">
										<span>الرئيسية</span>
									</NavLink>
									<span>-</span>
									<span>الخدمات</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ServiceHeader;
