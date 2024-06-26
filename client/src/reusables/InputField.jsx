/* eslint-disable react/prop-types */
const InputField = ({
  type,
  onChange,
  placeholder,
  value,
  label,
  className,
}) => {
  return (
    <div className="flex flex-col items-center">
      <label className="mt-2 text-white font-bold ">{label}</label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={className}
      />
    </div>
  );
};

export default InputField;
