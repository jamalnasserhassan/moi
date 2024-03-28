import Select from '../../../components/Fields/Select/Index';
import TextareaField from '../../../components/Fields/TextareaField/Index';

const StepTwo = () => {
	return (
		<li className='Stepper__content-item'>

			<h1>معلومات التذكرة</h1>

			<div className='Stepper__item-row'>
				<Select placeholder='اختر ادارة' label='الادارة المقدمة للخدمة' options={[]} name="selectManagement" />
			</div>

			<div className='Stepper__item-row'>
				<Select placeholder='اختر النوع' label='نوع التذكرة' options={[]} name="type" />
			</div>

			<div className='Stepper__item-row'>
				<Select placeholder='اختر تفاصيل التذكرة' label='تفاصيل التذكرة' options={[]} name="details" />
			</div>

			<div className='Stepper__item-row'>
				<TextareaField placeholder='ادخل الملاحظات ' label='ملاحظات اخري' options={[]} name="other" />
			</div>

		</li>
	);
};
export default StepTwo;
