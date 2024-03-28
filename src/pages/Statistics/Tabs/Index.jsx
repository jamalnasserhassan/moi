import { useState } from 'react';
import Table from '../../../components/Fields/Table/Index';

import './Tabs.scss';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
	};

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
        <div className='Tabs'>
            <ul className='Tabs__list'>
                <li className={activeTab === 0 ? 'is--warning is--active' : 'is--warning'} onClick={() => handleTabClick(0)}>
                    <strong>56</strong>
                    <p>معلقة</p>
                </li>
                <li className={activeTab === 1 ? 'is--danger is--active' : 'is--danger'} onClick={() => handleTabClick(1)}>
                    <strong>300</strong>
                    <p>مرفوضة</p>
                </li>
                <li className={activeTab === 2 ? 'is--orange is--active' : 'is--orange'} onClick={() => handleTabClick(2)}>
                    <strong>100</strong>
                    <p>ملغاة</p>
                </li>
                <li className={activeTab === 3 ? 'is--success is--active' : 'is--success'} onClick={() => handleTabClick(3)}>
                    <strong>200</strong>
                    <p>موافقة</p>
                </li>
            </ul>
            <div className='Tabs__content'>
				<div className={activeTab === 0 ? 'Tabs__content-item is--active' : 'Tabs__content-item'}>
					<Table columns={columns} data={data} />
					<div className='d-flex justify-content-center mt-3'>
						<button to="/" className="Button Button__secondary Button__medium Button__arrow">
							عرض الكل
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
									<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
										<path d="M3.332 8.5h9.333"/>
										<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
									</g>
								</svg>
							</span>
						</button>
					</div>
				</div>
				<div className={activeTab === 1 ? 'Tabs__content-item is--active' : 'Tabs__content-item'}>
					<Table columns={columns} data={data} />
				</div>
				<div className={activeTab === 2 ? 'Tabs__content-item is--active' : 'Tabs__content-item'}>
					<Table columns={columns} data={data} />
				</div>
				<div className={activeTab === 3 ? 'Tabs__content-item is--active' : 'Tabs__content-item'}>
					<Table columns={columns} data={data} />
				</div>
            </div>
        </div>
    );
};

export default Tabs;
