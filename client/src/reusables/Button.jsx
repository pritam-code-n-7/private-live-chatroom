/* eslint-disable react/prop-types */

const Button = ({ name, onClick, type, className }) => {
  return (
    <div className="flex">
      <button onClick={onClick} type={type} className={className}>
        {name}
      </button>
    </div>
  );
};

export default Button;
