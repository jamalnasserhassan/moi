import React, { useState } from 'react';
import './RadioField.scss';
import TextField from '../TextField/Index';

const RadioField = ({ options, icons, name, style, title, otherShow = false }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherValue, setOtherValue] = useState('');

  const handleOptionChange = (event, index) => {
    const newValue = options[index];
    setSelectedOption(newValue);
    if (newValue === 'أخرى') {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  // Update showOtherInput state based on the prop
  useState(() => {
    setShowOtherInput(otherShow);
  }, [otherShow]);

  return (
    <>
      {title && <label className="RadioField__title">{title}</label>}
      <div className={`RadioField ${style}`}>
        {options.map((option, index) => (
          <label htmlFor={`${name}-${index}`} key={option} className={`RadioField__label ${selectedOption === option ? 'is--checked' : ''}`}>
            <input
              name={name}
              id={`${name}-${index}`}
              type="radio"
              value={option}
              className="RadioField__input"
              checked={selectedOption === option}
              onChange={(event) => handleOptionChange(event, index)}
            />
            {icons && icons[index] && <span className="RadioField__icon" dangerouslySetInnerHTML={{ __html: icons[index] }} />}
            <span className="RadioField__text">{option}</span>
          </label>
        ))}
      </div>
      {showOtherInput && selectedOption === 'أخرى' && (
        <>
          <div className="space"></div>
          <TextField size="is--small" placeholder="اخرى" label="اخرى" name="otherValue" value={otherValue} onChange={handleOtherInputChange} />
        </>
      )}
    </>
  );
};

export default RadioField;
