import { forwardRef } from 'react';
import './TextareaField.scss';

const TextareaField = forwardRef(({ size, placeholder, label, name }, ref) => {
  const fieldClass = `TextareaField__field ${size ? `TextareaField--${size}` : ''}`;

  return (
    <div className={`TextareaField ${size ? `TextareaField--${size}` : ''}`} ref={ref}>
      {label && <label htmlFor={name} className='TextareaField__label'>{label}</label>}
      <div className={fieldClass}>
		<textarea ref={ref} type="text" name={name} id={name} placeholder={placeholder}></textarea>
      </div>
    </div>
  );
});

TextareaField.displayName = 'TextareaField';
export default TextareaField;
