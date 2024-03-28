import { forwardRef } from 'react';
import './PhoneField.scss';

const PhoneField = forwardRef(({ size, placeholder, label, name }, ref) => {
  const fieldClass = `PhoneField__field ${size ? `PhoneField--${size}` : ''}`;

  return (
    <div className={`PhoneField ${size ? `PhoneField--${size}` : ''}`} ref={ref}>
      {label && <label htmlFor={name} className='PhoneField__label'>{label}</label>}
      <div className={fieldClass}>
        <input ref={ref} type="tel" dir='rtl' name={name} id={name} placeholder={placeholder} pattern="[0-9]{8}" />
      </div>
    </div>
  );
});

PhoneField.displayName = 'PhoneField';
export default PhoneField;
