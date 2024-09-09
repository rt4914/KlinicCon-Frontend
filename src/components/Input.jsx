const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  variant = 'DEFAULT'
}) => {
  const variants = {
    DEFAULT: {
      input: 'border-gray-500 text-gray-900',
      label: 'text-gray-900 text-sm',
    },
    SECONDARY: {
      input: 'bg-gray-100 border-gray-300 text-gray-700',
      label: 'text-gray-500 text-sm',
    },
    SMALL: {
      input: 'text-sm border-gray-300 text-gray-700',
      label: 'font-semibold text-xs',
    },
  };

  const { input: inputStyles, label: labelStyles } = variants[variant] || variants.DEFAULT;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className={`block mb-2 tracking-tight ${labelStyles}`}>
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
        className={`block rounded-md border px-3 py-2 focus:outline-none text-xs w-full ${inputStyles}`}
      />
    </div>
  );
};

export default Input;
