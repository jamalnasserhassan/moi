import { forwardRef } from 'react';
import './Search.scss';

const Search = forwardRef(({ size, placeholder, label }, ref) => {
  const searchClass = `SearchInput__field ${size ? `Search--${size}` : ''}`;

  return (
    <div className={`SearchInput ${size ? `SearchInput--${size}` : ''}`} ref={ref}>
      {label && <label className='SearchInput__label'>{label}</label>}
      <div className={searchClass}>
        <input ref={ref} type="email" name="search" id="search" placeholder={placeholder} />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12">
            <circle cx="5.373" cy="5.377" r="4.854" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".81"/>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".81" d="m8.75 9.008 1.903 1.898" opacity=".6"/>
          </svg>
        </button>
      </div>
    </div>
  );
});

Search.displayName = 'Search';
export default Search;
