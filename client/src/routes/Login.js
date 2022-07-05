import { LoginContainer } from "../components/styled/LoginContainer.styled";
import ImagesLogin from "../components/ImagesLogin";
import logo from "../logo.svg";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import LostPasswordForm from "../components/LostPasswordForm";

const Login = () => {
  const [logedIn, setLogedIn] = useState(false);
  const [activeForm, setActiveForm] = useState("login");
  const token = localStorage.getItem("token");

  const changeStatus = () => {
    setLogedIn(true);
  };

  const changeActiveForm = (active) => {
    setActiveForm(active);
  };

  if (logedIn || token) return <Navigate to="/" />;
  return (
    <>
      <LoginContainer>
        <ImagesLogin></ImagesLogin>
        <section>
          <img alt="logo" src={logo} />
          {activeForm === "login" && (
            <LoginForm
              changeStatus={changeStatus}
              changeActiveForm={changeActiveForm}
            ></LoginForm>
          )}
          {activeForm === "register" && (
            <RegisterForm changeActiveForm={changeActiveForm}></RegisterForm>
          )}
          {activeForm === "password" && (
            <LostPasswordForm
              changeActiveForm={changeActiveForm}
            ></LostPasswordForm>
          )}
        </section>
      </LoginContainer>
    </>
  );
};

export default Login;
