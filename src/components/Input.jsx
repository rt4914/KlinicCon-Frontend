import PropTypes from 'prop-types';

const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  variant = Variant.DEFAULT
}) => {
  const variants = {
    [Variant.DEFAULT]: {
      input: 'border-gray-500 text-gray-900',
      label: 'text-gray-900 text-sm',
    },
    [Variant.SECONDARY]: {
      input: 'bg-gray-100 border-gray-300 text-gray-700',
      label: 'text-gray-500 text-sm',
    },
    [Variant.SMALL]: {
      input: 'text-sm border-gray-300 text-gray-700',
      label: 'font-semibold text-xs',
    },
  };

  const { input: inputStyles, label: labelStyles } = variants[variant] || variants[Variant.DEFAULT];

  return (
    <>
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
    </>
  );
};

const Variant = {
  DEFAULT: 'DEFAULT',
  SECONDARY: 'SECONDARY',
  SMALL: 'SMALL',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(Variant)),
};

export { Input, Variant };
