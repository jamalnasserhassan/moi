import { forwardRef } from 'react';
import './Select.scss';

const Select = forwardRef(({ label, options, value, onChange, placeholder, isMulti, size = 'medium', name, defaultVal, optional}, ref) => {
  return (
    <div className={`Select Select--${size}`}>
		{label && <label htmlFor={name} className='Select__label'>
			{label}
			<span>{optional}</span>
		</label>}
		<select
		ref={ref}
		className={`Select__field is--normal is--${size}`}
		value={value}
		onChange={onChange}
		multiple={isMulti}
		defaultValue={defaultVal}
		name={name}
		id={name}
		>
		{placeholder && <option value="">{placeholder}</option>}
		{options.map((option, index) => (
			<option key={option.value || index} value={option.value}>
			{option.label}
			</option>
		))}
		</select>
    </div>
  );
});

Select.displayName = 'Select';
export default Select;
