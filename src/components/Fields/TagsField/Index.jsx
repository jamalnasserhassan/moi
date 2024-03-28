import React, { useState, useRef, forwardRef } from 'react';
import './TagsField.scss';

const TagsField = forwardRef(({ size, placeholder, label, name }, ref) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = () => {
    if (inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
    inputRef.current.focus();
  };

  const handleDeleteTag = (tagToDelete) => {
    const updatedTags = tags.filter(tag => tag !== tagToDelete);
    setTags(updatedTags);
  };

  return (
	  <div className="TagsField">

		{label && <label htmlFor={name} className='TagsField__label'>{label}</label>}

      	<div className="TagsField__field">
			<input
				ref={inputRef}
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder={placeholder}
				aria-label={label}
				name={name}
			/>
			<button className="TagsField__field-button" type="button" onClick={handleAddTag}>
				<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="10" y="16" width="14" height="2" fill="currentColor"/>
					<rect x="18" y="10" width="14" height="2" transform="rotate(90 18 10)" fill="currentColor"/>
				</svg>
			</button>
		</div>

		<div className="TagsField__list">
			{tags.map((tag, index) => (
			<div key={index} className="TagsField__list-item">
				<span>{tag}</span>
				<button type='button' onClick={() => handleDeleteTag(tag)}>
					<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.9985 4.98437C13.9851 4.98437 13.9651 4.98437 13.9451 4.98437C10.4185 4.63104 6.89848 4.49771 3.41181 4.85104L2.05181 4.98437C1.77181 5.01104 1.52515 4.81104 1.49848 4.53104C1.47181 4.25104 1.67181 4.01104 1.94515 3.98437L3.30515 3.85104C6.85181 3.49104 10.4451 3.63104 14.0451 3.98437C14.3185 4.01104 14.5185 4.25771 14.4918 4.53104C14.4718 4.79104 14.2518 4.98437 13.9985 4.98437Z" fill="currentColor"/>
					<path d="M5.66846 4.31594C5.6418 4.31594 5.61513 4.31594 5.5818 4.30927C5.31513 4.2626 5.12846 4.0026 5.17513 3.73594L5.3218 2.8626C5.42846 2.2226 5.57513 1.33594 7.12846 1.33594H8.87513C10.4351 1.33594 10.5818 2.25594 10.6818 2.86927L10.8285 3.73594C10.8751 4.00927 10.6885 4.26927 10.4218 4.30927C10.1485 4.35594 9.88846 4.16927 9.84846 3.9026L9.7018 3.03594C9.60846 2.45594 9.58846 2.3426 8.8818 2.3426H7.13513C6.42846 2.3426 6.41513 2.43594 6.31513 3.02927L6.1618 3.89594C6.1218 4.1426 5.90846 4.31594 5.66846 4.31594Z" fill="currentColor"/>
					<path d="M10.1416 15.6677H5.86156C3.53489 15.6677 3.44156 14.381 3.36823 13.341L2.93489 6.62769C2.91489 6.35436 3.12823 6.11436 3.40156 6.09436C3.68156 6.08103 3.91489 6.28769 3.93489 6.56103L4.36823 13.2744C4.44156 14.2877 4.46823 14.6677 5.86156 14.6677H10.1416C11.5416 14.6677 11.5682 14.2877 11.6349 13.2744L12.0682 6.56103C12.0882 6.28769 12.3282 6.08103 12.6016 6.09436C12.8749 6.11436 13.0882 6.34769 13.0682 6.62769L12.6349 13.341C12.5616 14.381 12.4682 15.6677 10.1416 15.6677Z" fill="currentColor"/>
					<path d="M9.10672 12H6.88672C6.61339 12 6.38672 11.7733 6.38672 11.5C6.38672 11.2267 6.61339 11 6.88672 11H9.10672C9.38005 11 9.60672 11.2267 9.60672 11.5C9.60672 11.7733 9.38005 12 9.10672 12Z" fill="currentColor"/>
					<path d="M9.66536 9.33594H6.33203C6.0587 9.33594 5.83203 9.10927 5.83203 8.83594C5.83203 8.5626 6.0587 8.33594 6.33203 8.33594H9.66536C9.9387 8.33594 10.1654 8.5626 10.1654 8.83594C10.1654 9.10927 9.9387 9.33594 9.66536 9.33594Z" fill="currentColor"/>
					</svg>
				</button>
			</div>
			))}
		</div>

    </div>
  );
});

export default TagsField;
