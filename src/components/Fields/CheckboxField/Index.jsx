import { forwardRef } from 'react';
import './CheckboxField.scss';

const CheckboxField = forwardRef(({ options, label, selectedOptions, icons, onSelect, style, name }, ref) => {
  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onSelect(updatedOptions);
  };

  return (
    <>
      {label && <label htmlFor={name} className='CheckboxField__title'>{label}</label>}
      <div className={`CheckboxField ${style}`} ref={ref}>
        {options.map((option, index) => (
          <label htmlFor={`${name}-${index}`} key={option} className={`CheckboxField__label ${selectedOptions.includes(option) ? 'is--checked' : ''}`}>
            <input
              name={name}
              id={`${name}-${index}`}
              type="checkbox"
              className='CheckboxField__input'
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {icons && icons[index] && <span className="CheckboxField__icon" dangerouslySetInnerHTML={{ __html: icons[index] }} />}
            <span className='CheckboxField__text'>{option}</span>
          </label>
        ))}
      </div>
    </>
  );
});

export default CheckboxField;
