import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" name="email" placeholder="example@gmail.com" type="email" />
      <InputForm label="Password" name="password" placeholder="********" type="password" />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
