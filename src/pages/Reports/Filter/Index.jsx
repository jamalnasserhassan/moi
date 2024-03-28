import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Select from '../../../components/Fields/Select/Index';
import Search from '../../../components/Fields/Search/Index';
import DatePickerField from '../../../components/Fields/DatePickerField/Index';

const FilterReports = () => {

	const { register, handleSubmit, formState: { errors } } = useForm();

	const datePickerRef = useRef(null);

    const onSubmit = (data) => {
        console.log(data);
    };

    const options = [
        { value: 'one', label: '1 خيار' },
        { value: 'two', label: '2 خيار' },
        { value: 'three', label: '3 خيار' },
    ];

    return (
        <section className="Section Section--width Section--statistics Section--top">
            <div className='container'>
                <section className='Section--index Section--card Section--white Section--shadow Section--form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className='col-lg-6 mb-3 mb-3'>
                                <Select placeholder='حدد الحالة' label='الخدمة' options={options} {...register('service', { required: true })} />
                                {errors.service && <span className="Form__error">هذا الحقل مطلوب</span>}
                            </div>
                            <div className='col-lg-6 mb-3 mb-3'>
                                <Select placeholder='حدد الترتيب' label='الحالة' options={options} {...register('status', { required: true })} />
                                {errors.status && <span className="Form__error">هذا الحقل مطلوب</span>}
                            </div>
                            <div className='col-lg-6 mb-3 mb-3'>
                                <DatePickerField innerRef={datePickerRef} placeholder='حدد التاريخ' label='التاريخ' {...register('date', { required: true })} />
                                {errors.date && <span className="Form__error">هذا الحقل مطلوب</span>}
                            </div>
                            <div className='col-lg-6 mb-3 mb-3'>
                                <Search size="large" placeholder="ابحث برقم المعامله او اسم المرسل" label="البحث" {...register('search')} />
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center justify-content-lg-end mt-3'>
                            <button className='Button Button__icon Button__secondary'>
                                <span>
									<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="8.33174" cy="8.83565" r="6.3669" stroke="currentColor" strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M12.7617 13.5938L15.2579 16.0835" stroke="currentColor" strokeWidth="1.0625" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
                                </span>
                                بحث
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    )
}
export default FilterReports;
