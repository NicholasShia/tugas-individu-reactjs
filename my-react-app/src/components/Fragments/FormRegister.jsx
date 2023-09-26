import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" name="fullname" placeholder="insert your name here..." type="text" />
      <InputForm label="Email" name="email" placeholder="example@gmail.com" type="text" />
      <InputForm label="Password" name="password" placeholder="********" type="password" />
      <InputForm label="Confirm Password" name="confirmPassword" placeholder="********" type="password" />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
