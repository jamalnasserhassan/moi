import PhoneField from '../../../components/Fields/PhoneField/Index';
import Select from '../../../components/Fields/Select/Index';
import SearchUser from '../../../components/Fields/SearchUser/Index';
import UserInfo from '../../../components/Fields/UserInfo';

const StepOne = ({toggleSidebar}) => {

	return (
		<li className='Stepper__content-item is--active'>

			<h1>معلومات طالب الخدمة</h1>

			<div className='Stepper__item-row'>
				<UserInfo toggleSidebarOpen={toggleSidebar} color='primary'/>
			</div>

			<div className='Stepper__item-row'>
				<SearchUser size='form' placeholder='ادخل رقم الحساب مثال (556655)' label='رقم حساب المستخدم'/>
			</div>

			<div className='Stepper__item-row'>
				<Select placeholder='اختر ادارة' label='الادارة' options={[]} name="management" />
			</div>

			<div className='Stepper__item-row'>
				<Select placeholder='اختر وظيفة' label='الرتبة' options={[]} name="rank" />
			</div>

			<div className='Stepper__item-row'>
				<PhoneField size="large" placeholder="ادخل رقم الجوال مثال (50607055)" label="رقم الجوال" name="phone" />
			</div>

		</li>
	);
};
export default StepOne;
