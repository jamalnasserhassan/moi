import React, { forwardRef } from 'react';
import './RepeaterField.scss';

const RepeaterField = forwardRef(({ size, type, placeholder, label, name}, ref) => {
  const fieldClass = `RepeaterField__field ${size ? `RepeaterField--${size}` : ''}`;

  return (
    <div className={`RepeaterField ${size ? `RepeaterField--${size}` : ''}`}>
      {label && <label htmlFor={name} className='RepeaterField__label'>{label}</label>}
      <div className={fieldClass}>
        <input ref={ref} type={type} name={name} id={name} placeholder={placeholder} />
      </div>
      <button>إضافة المزيد</button>
    </div>
  );
});

RepeaterField.displayName = 'RepeaterField';
export default RepeaterField;
