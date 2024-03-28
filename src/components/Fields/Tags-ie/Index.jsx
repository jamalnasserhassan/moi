import Creatable from 'react-select/creatable';
import './Tags.scss';

const Tags = ({ label, options, value, onChange, placeholder, size = 'medium'}) => {
  return (
    <div className={`Select Select--${size}`}>
      {label && <label className='Select__label'>{label}</label>}
      <Creatable
        className={`Select__field is--normal is--${size}`}
        classNamePrefix="Select"
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#091F4A',
            primary75: 'rgba(9, 31, 74, 0.75)',
            primary50: 'rgba(9, 31, 74, 0.50)',
            primary25: 'rgba(9, 31, 74, 0.25)',
            danger: '#DE346D',
            dangerLight: 'rgba(222, 52, 109, 0.3)',
          },
        })}
      />
    </div>
  );
};

export default Tags;
