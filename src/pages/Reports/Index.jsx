import './Reports.scss';

import Breadcrumb from "../../components/Breadcrumb/Index";
import Table from '../../components/Fields/Table/Index';
import FilterReports from './Filter/Index';


function Reports() {


	const columns = [
		{
			Header: '',
			accessor: 'key',
			cellType: 'checkbox',
			width: '30px',
		},
		{
			Header: 'رقم الطلب',
			accessor: 'number',
		},
		{
			Header: 'تاريخ الإنشاء',
			accessor: 'dateCreate',
		},
		{
			Header: 'طالب الخدمة',
			accessor: 'order',
			cellType: 'avatar-text',
		},
		{
			Header: 'الدور',
			accessor: 'turn',
		},
		{
			Header: 'معلقة مع',
			accessor: 'with',
			cellType: 'avatar-text',
		},
		{
			Header: 'تاريخ التعيين',
			accessor: 'date',
		},
		{
			Header: '',
			accessor: 'options',
			cellType: 'menu-button',
		}
	];

	const data = [
		{ key: '', number: 'WFH6000361', dateCreate: '23 Feb 2023', order: { text: 'نايف احمد', avatarSrc: '/images/avatar.png' }, turn: 'مدير التطبيقات', with: { text: 'على احمد', avatarSrc: '/images/avatar.png' }, date: '23 Feb 2023', options: '' },
		{ key: '', number: 'WFH6000361', dateCreate: '23 Feb 2023', order: { text: 'نايف أحمد', avatarSrc: '/images/avatar.png' }, turn: 'مدير التطبيقات', with: { text: 'على احمد', avatarSrc: '/images/avatar.png' }, date: '23 Feb 2023', options: '' },
		{ key: '', number: 'WFH6000361', dateCreate: '23 Feb 2023', order: { text: 'نايف أحمد', avatarSrc: '/images/avatar.png' }, turn: 'مدير التطبيقات', with: { text: 'على احمد', avatarSrc: '/images/avatar.png' }, date: '23 Feb 2023', options: '' },
	];

	return (
		<section className="Page">

			<div className="Page__header">
				<div className="Page__header-container">
					<div className="Page__header-background" style={{ backgroundImage: 'url(/images/statistics.png)' }}>
					</div>
					<div className="Page__header-padding">
						<div className="Page__header-content">
							<Breadcrumb />
						</div>
					</div>
				</div>
			</div>

			<div className="Page__Content">

				<FilterReports/>

				<section className='Section--width Section--margin'>
					<div className='container'>
						<Table columns={columns} data={data} />
						<div className='d-flex align-items-center justify-content-center mt-3'>
							<button className='Button Button__icon Button__secondary'>
								<span>
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.25 2.25V1.75H1.75V2.25H2.25ZM9.39645 10.1036C9.59171 10.2988 9.90829 10.2988 10.1036 10.1036C10.2988 9.90829 10.2988 9.59171 10.1036 9.39645L9.39645 10.1036ZM2.75 8.25V2.25H1.75V8.25H2.75ZM2.25 2.75H8.25V1.75H2.25V2.75ZM1.89645 2.60355L9.39645 10.1036L10.1036 9.39645L2.60355 1.89645L1.89645 2.60355Z" fill="currentColor"/>
										<path d="M3 11.25V11.25C3 11.947 3 12.2955 3.05764 12.5853C3.29436 13.7753 4.22466 14.7056 5.41473 14.9424C5.70453 15 6.05302 15 6.75 15H9C11.8284 15 13.2426 15 14.1213 14.1213C15 13.2426 15 11.8284 15 9V6.75C15 6.05302 15 5.70453 14.9424 5.41473C14.7056 4.22466 13.7753 3.29436 12.5853 3.05764C12.2955 3 11.947 3 11.25 3V3" stroke="currentColor" strokeLinecap="round"/>
									</svg>
								</span>
								تصدير
							</button>
						</div>
					</div>
				</section>

			</div>
		</section>
	)
}
export default Reports;
