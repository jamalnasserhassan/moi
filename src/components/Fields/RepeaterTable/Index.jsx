import { forwardRef } from 'react';
import './TextField.scss';

const TextField = forwardRef(({ size, placeholder, label, name }, ref) => {
  const fieldClass = `TextField__field ${size ? `TextField--${size}` : ''}`;

  return (
    <div className={`TextField ${size ? `TextField--${size}` : ''}`} ref={ref}>
      {label && <label htmlFor={name} className='TextField__label'>{label}</label>}
      <div className={fieldClass}>
        <input ref={ref} type="text" name={name} id={name} placeholder={placeholder} />
      </div>
    </div>
  );
});

TextField.displayName = 'TextField';
export default TextField;
