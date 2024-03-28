import { useState, forwardRef } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './DatePickerField.scss';

const DatePickerField = forwardRef(({ label, placeholder = 'التاريخ', size = 'medium' }, ref) => {
  const [value, onChange] = useState(null);

  const handleDateChange = (newValue) => {
    onChange(newValue);
  };

  const calendarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
      <rect width="13.5" height="11.25" x="2.75" y="5" stroke="currentColor" rx="2"/>
      <path stroke="currentColor" strokeLinecap="round" d="M2.75 8.75h13.5"/>
      <path stroke="currentColor" strokeLinecap="round" strokeOpacity=".2" d="M7.25 12.5h4.5"/>
      <path stroke="currentColor" strokeLinecap="round" d="M6.5 2.75v3M12.5 2.75v3"/>
    </svg>
  );

  return (
    <div className={`Date Date--${size}`}>
      {label && <label className='Date__label'>{label}</label>}
      <div className={`Date__wrapper is--${size}`}>
        {!value ? (
          <div className={`Date__placeholder is--${size}`}>{placeholder}</div>
        ) : ''}
        <DatePicker
          ref={ref}
          onChange={handleDateChange}
          value={value}
          className={`Date__field is--${size}`}
          format="d/M/yyyy"
          clearIcon={null}
          locale="ar"
          calendarClassName="arabic-calendar"
          calendarIcon={calendarIcon}
          calendarAriaLabel="Toggle calendar"
        />
      </div>
    </div>
  );
});

DatePickerField.displayName = 'DatePickerField';
export default DatePickerField;
