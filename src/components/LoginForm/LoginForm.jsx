import Button from "../Button/Button";
import Input from "../Input/Input";

import "./styles.css";

function LoginForm() {
  // const CLICK_ME_BUTTON = document.querySelector("#clickme_button");

  // const login = () => {
  //   console.log("login");
  // };

  // CLICK_ME_BUTTON.addEventListener("click", login);

  const login = (event) => {
    event.preventDefault();
    console.log("Login successfull");
  };

  return (
    <form onSubmit={login} className="login-form-container">
      <p className="title">Login form</p>
      <div className="inputs-container">
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      {/* Пример работы с onClick */}
      {/* <button onClick={login} id="clickme_button" type="button">
        Click me
      </button> */}
      {/* Когда кнопка type="button" */}
      {/* <Button name="Login" type="button" onClick={login} /> */}
      <Button name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;
