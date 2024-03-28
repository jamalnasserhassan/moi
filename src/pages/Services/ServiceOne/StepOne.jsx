import { useState } from 'react';

import PhoneField from '../../../components/Fields/PhoneField/Index';
import Select from '../../../components/Fields/Select/Index';
import RadioField from '../../../components/Fields/RadioField/Index';
import SearchUser from '../../../components/Fields/SearchUser/Index';
import UserInfo from '../../../components/Fields/UserInfo';

const StepOne = ({toggleSidebar}) => {

	// Handle Select
	const [selectedOption, setSelectedOption] = useState('me');
	const options = ['انا','شخص أخر'];
	const icons = [
		'<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9009 21.5984L20.9012 17.9988C20.9014 16.0104 19.2896 14.3984 17.3012 14.3984H7.70197C5.7139 14.3984 4.10219 16.01 4.10197 17.998L4.10156 21.5984M16.1016 5.99844C16.1016 7.98666 14.4898 9.59844 12.5016 9.59844C10.5133 9.59844 8.90156 7.98666 8.90156 5.99844C8.90156 4.01021 10.5133 2.39844 12.5016 2.39844C14.4898 2.39844 16.1016 4.01021 16.1016 5.99844Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		'<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.89844 21.5983C1.89838 22.1506 2.34604 22.5984 2.89833 22.5984C3.45061 22.5985 3.89838 22.1508 3.89844 21.5985L1.89844 21.5983ZM2.89884 17.998L3.89884 17.9981L2.89884 17.998ZM13.0984 15.3984C13.6507 15.3984 14.0984 14.9507 14.0984 14.3984C14.0984 13.8462 13.6507 13.3984 13.0984 13.3984V15.3984ZM22.0984 16.5984C22.6507 16.5984 23.0984 16.1507 23.0984 15.5984C23.0984 15.0462 22.6507 14.5984 22.0984 14.5984V16.5984ZM16.6984 14.5984C16.1461 14.5984 15.6984 15.0462 15.6984 15.5984C15.6984 16.1507 16.1461 16.5984 16.6984 16.5984V14.5984ZM18.3984 18.2983C18.3984 18.8506 18.8462 19.2983 19.3984 19.2983C19.9507 19.2983 20.3984 18.8506 20.3984 18.2983H18.3984ZM20.3984 12.8983C20.3984 12.346 19.9507 11.8983 19.3984 11.8983C18.8462 11.8983 18.3984 12.346 18.3984 12.8983H20.3984ZM18.3874 1.52613C17.9056 1.25609 17.2962 1.42772 17.0261 1.90948C16.7561 2.39124 16.9277 3.0007 17.4095 3.27074L18.3874 1.52613ZM17.4095 8.72613C16.9277 8.99617 16.7561 9.60563 17.0261 10.0874C17.2962 10.5692 17.9056 10.7408 18.3874 10.4707L17.4095 8.72613ZM13.8984 5.99844C13.8984 7.43438 12.7344 8.59844 11.2984 8.59844V10.5984C13.8389 10.5984 15.8984 8.53895 15.8984 5.99844H13.8984ZM11.2984 8.59844C9.8625 8.59844 8.69844 7.43438 8.69844 5.99844H6.69844C6.69844 8.53895 8.75793 10.5984 11.2984 10.5984V8.59844ZM8.69844 5.99844C8.69844 4.5625 9.8625 3.39844 11.2984 3.39844V1.39844C8.75793 1.39844 6.69844 3.45793 6.69844 5.99844H8.69844ZM11.2984 3.39844C12.7344 3.39844 13.8984 4.5625 13.8984 5.99844H15.8984C15.8984 3.45793 13.8389 1.39844 11.2984 1.39844V3.39844ZM3.89844 21.5985L3.89884 17.9981L1.89884 17.9979L1.89844 21.5983L3.89844 21.5985ZM6.49884 13.3984C3.95853 13.3984 1.89913 15.4576 1.89884 17.9979L3.89884 17.9981C3.899 16.5623 5.06302 15.3984 6.49884 15.3984V13.3984ZM6.49884 15.3984H13.0984V13.3984H6.49884V15.3984ZM22.0984 14.5984H19.3984V16.5984H22.0984V14.5984ZM19.3984 14.5984H16.6984V16.5984H19.3984V14.5984ZM20.3984 18.2983V15.5984H18.3984V18.2983H20.3984ZM20.3984 15.5984V12.8983H18.3984V15.5984H20.3984ZM17.4095 3.27074C18.6471 3.96447 19.2984 4.98409 19.2984 5.99844H21.2984C21.2984 4.06254 20.0623 2.46495 18.3874 1.52613L17.4095 3.27074ZM19.2984 5.99844C19.2984 7.01278 18.6471 8.0324 17.4095 8.72613L18.3874 10.4707C20.0623 9.53192 21.2984 7.93434 21.2984 5.99844H19.2984Z" fill="currentColor"/></svg>'
	];
	const handleSelect = (option) => {
		setSelectedOption(option);
	};

	return (
		<li className='Stepper__content-item is--active'>

			<h1>معلومات طالب الخدمة</h1>

			<div className='Stepper__item-row'>
				<RadioField options={options} selectedOption={selectedOption} onSelect={handleSelect} icons={icons} style={'is--small'} name={'info'} otherShow={'true'}/>
			</div>

			<div className='Stepper__item-row'>
				<SearchUser size='form' placeholder='ادخل رقم الحساب مثال (556655)' label='رقم حساب المستخدم'/>
			</div>

			<div className='Stepper__item-row'>
				<UserInfo toggleSidebarOpen={toggleSidebar} />
			</div>

			<div className='Stepper__item-row'>
				<Select placeholder='اختر ادارة' label='الادارة' options={[]} name="management" />
			</div>

			<div className='Stepper__item-row'>
				<Select placeholder='اختر رتبة' label='الرتبة' options={[]} name="rank" />
			</div>

			<div className='Stepper__item-row'>
				<PhoneField size="large" placeholder="ادخل رقم الجوال مثال (50607055)" label="رقم الجوال" name="phone" />
			</div>

		</li>
	);
};
export default StepOne;
