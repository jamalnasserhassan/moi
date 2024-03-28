import Select from '../../../components/Fields/Select/Index';
import TextareaField from '../../../components/Fields/TextareaField/Index';
import DatePickerField from '../../../components/Fields/DatePickerField/Index';

const StepTwo = () => {

	return (
		<li className='Stepper__content-item'>

			<h1>معلومات الزيارة</h1>

			<div className='Stepper__item-row'>
				<Select placeholder='اختر موقع' label='موقع الزيارة' options={[]} name="location" />
			</div>

			<div className="Stepper__item-row">
				<DatePickerField size="large" label='تاريخ الزيارة' placeholder='اختر تاريخ' name='visit-date'/>
			</div>

			<div className='Stepper__item-row'>
				<TextareaField size="large" label='سبب الزيارة' placeholder='ادخل سبب الزيارة ' name='visit-reason'/>
			</div>

		</li>
	);
};
export default StepTwo;
