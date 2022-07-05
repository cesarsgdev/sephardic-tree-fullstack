import { LoginContainer } from "../components/styled/LoginContainer";
import ImagesLogin from "../components/ImagesLogin";
import logo from "../logo.svg";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [logedIn, setLogedIn] = useState(false);
  const token = localStorage.getItem("token");

  const changeStatus = () => {
    setLogedIn(true);
  };

  if (logedIn || token) return <Navigate to="/" />;
  return (
    <>
      <LoginContainer>
        <ImagesLogin></ImagesLogin>
        <section>
          <img alt="logo" src={logo} />
          <h1>Log in to your account</h1>
          <LoginForm changeStatus={changeStatus}></LoginForm>
          <div className="loginOptions">
            <p>
              Don't have an account? <button>Sign up</button>
            </p>
            <p>
              Lost password? <button>Click here</button>
            </p>
          </div>
        </section>
      </LoginContainer>
    </>
  );
};

export default Login;
