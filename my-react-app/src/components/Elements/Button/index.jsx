/* eslint-disable react/prop-types */

const Button = ({ classname, children, onClick = () => {}, type = "button" }) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
