import { forwardRef } from 'react';
import ReactSelect from 'react-select';
import './Select.scss';

const Select = forwardRef(({ label, options, value, onChange, placeholder, isMulti, size = 'medium', defaultVal }, ref) => {
  return (
    <div className={`Select Select--${size}`}>
      {label && <label className='Select__label'>{label}</label>}
      <ReactSelect
        ref={ref}
        className={`Select__field is--normal is--${size}`}
        classNamePrefix="Select"
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isMulti={isMulti}
        defaultValue={options.find(option => option.value === defaultVal)}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#091F4A',
            primary75: 'rgba(9, 31, 74, 0.75)',
            primary50: 'rgba(9, 31, 74, 0.50)',
            primary25: 'rgba(9, 31, 74, 0.25)',
            danger: '#DE346D',
            dangerLight: 'rgba(222, 52, 109, 0.3)',
          },
        })}
      />
    </div>
  );
});

Select.displayName = 'Select';
export default Select;
