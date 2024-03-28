import { useState } from 'react';

import RadioField from '../../../components/Fields/RadioField/Index';
import TextareaField from '../../../components/Fields/TextareaField/Index';
import DatePickerField from '../../../components/Fields/DatePickerField/Index';
import TagsField from '../../../components/Fields/TagsField/Index';

const StepTwo = () => {

	// Handle Select
	const [selectedOption, setSelectedOption] = useState('type');
	const handleCheck = (option) => {
		setSelectedOption(option);
	};


	return (
		<li className='Stepper__content-item'>

			<h1>بيانات خدمة الوصول للشبكة</h1>

			<div className='Stepper__item-row mb-0'>
				<TagsField label="مصدر العناوين الشبكية" placeholder="ادخل العنوان الشبكي" name='source'/>
			</div>

			<div className='Stepper__item-row mb-0'>
				<TagsField label="وصول العناوين الشبكية" placeholder="ادخل الوصول" name='arrive'/>
			</div>

			<div className='Stepper__item-row mb-0'>
				<TagsField label="المنافذ المطلوبة" placeholder="ادخل المنافذ المطلوبه" name='enter'/>
			</div>

			<div className='Stepper__item-row'>
				<RadioField options={["مؤقت", "دائم"]} title="نوع الصلاحية" selectedOptions={selectedOption} onSelect={handleCheck} icons={[]} style={'is--small'} name={'type'} />
			</div>

			<div className="Stepper__item-row">
				<DatePickerField size="large" label='من' placeholder='اختر تاريخ' name='service-range-date-from'/>
			</div>

			<div className="Stepper__item-row">
				<DatePickerField size="large" label='الي' placeholder='اختر تاريخ' name='service-range-date-to'/>
			</div>

			<div className='Stepper__item-row'>
				<TextareaField size="large" label='سبب طلب الصلاحية' placeholder='ادخل سبب طلب الصلاحية' name='reasonRequestService'/>
			</div>

		</li>
	);
};
export default StepTwo;
