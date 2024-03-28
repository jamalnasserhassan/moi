import { forwardRef } from 'react';
import './NumberField.scss';

const NumberField = forwardRef(({ size, placeholder, label, name }, ref) => {
  const fieldClass = `NumberField__field ${size ? `NumberField--${size}` : ''}`;

  return (
    <div className={`NumberField ${size ? `${size}` : ''}`} ref={ref}>
      {label && <label htmlFor={name} className='NumberField__label'>{label}</label>}
      <div className={fieldClass}>
        <input ref={ref} type="text" name={name} id={name} placeholder={placeholder} />
      </div>
    </div>
  );
});

NumberField.displayName = 'NumberField';
export default NumberField;
