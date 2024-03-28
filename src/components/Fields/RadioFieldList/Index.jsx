import React, { useState } from 'react';

import './RadioFieldList.scss';
import TitleSvg from './TitleSvg';
import ProcessorSvg from './ProcessorSvg';
import MemorySvg from './MemorySvg';

const RadioFieldList = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    {
      value: 'small',
      label: 'صغير',
      processor: '32',
      memory: '16',
    },
    {
      value: 'medium',
      label: 'متوسط',
      processor: '64',
      memory: '32',
    },
    {
      value: 'large',
      label: 'كبير',
      processor: '128',
      memory: '64',
    },
  ];

  return (
    <>
      <label className="RadioFieldList__title">إمكانات الخادم</label>
      <div className="RadioFieldList">
        {options.map((option, index) => (
          <div key={index} className="RadioFieldList__item">
            <input
              name="capabilities"
              id={`server-${option.value}`}
              type="radio"
              value={option.value}
              className="RadioFieldList__input"
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
            <label
              htmlFor={`server-${option.value}`}
              className={`RadioFieldList__label ${selectedOption === option.value ? 'is--checked' : ''}`}
            >
              <div className="RadioFieldList-header">
                <TitleSvg />
                <span>{option.label}</span>
              </div>
              <div className="RadioFieldList-list">
                <ul>
                  <li>
                    <span>
                      <ProcessorSvg />
                      <p>المعالج</p>
                    </span>
                    <span>{option.processor}</span>
                  </li>
                  <li>
                    <span>
                      <MemorySvg />
                      <p>الذاكرة</p>
                    </span>
                    <span>{option.memory}</span>
                  </li>
                </ul>
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadioFieldList;
