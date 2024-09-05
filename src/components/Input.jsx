const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  borderColor = 'border-gray-300',
  focusBorderColor = 'focus:border-gray-500',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  placeholderColor = 'placeholder-gray-400',
  labelColor = 'text-gray-900',
  labelFontWeight = 'font-normal',
  labelClassName = '',
  inputClassName = '',
  wrapperClassName = ''
}) => {
  return (
    <div className={`${wrapperClassName}`}>
      {label && (
        <label htmlFor={name} className={`block mb-1 text-sm ${labelColor} ${labelFontWeight} ${labelClassName}`}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={`px-3 py-2 border rounded-lg focus:outline-none
          ${borderColor} ${focusBorderColor} ${backgroundColor} ${textColor} ${placeholderColor} ${inputClassName}`}
      />
    </div>
  );
};

export default Input;
