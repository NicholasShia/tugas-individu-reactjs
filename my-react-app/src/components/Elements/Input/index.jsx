/* eslint-disable react/prop-types */

import Label from "./Label";
import Input from "./Input";

const InputForm = ({ label, type, name, placeholder }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
