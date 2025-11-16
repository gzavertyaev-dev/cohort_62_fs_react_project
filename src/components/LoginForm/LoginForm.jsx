import Input from "../Input/Input";
import Button from "../Button/Button";
import "./styles.css";

function LoginForm({}) {
  return (
    <div className="login_form_wrapper">
      <h2 className="login_form_title">Login form</h2>

      <form className="login_form">
        <Input
          name="Email"
          type="Email"
          label="Email"
          placeholder="Enter your Email"
        />
        <Input
          name="Password"
          type="Password"
          label="Password"
          placeholder="Enter your Password"
        />
        <Button text="Login" />
      </form>
    </div>
  );
}
export default LoginForm;
