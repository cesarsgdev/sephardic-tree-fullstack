import { LoginContainer } from "../components/styled/LoginContainer";
import ImagesLogin from "../components/ImagesLogin";
import logo from "../logo.svg";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedIn, setLogedIn] = useState(false);

  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    };

    fetch("api/login", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmail("");
        setPassword("");
        if (data.success) {
          localStorage.setItem("token", data.token);
          setLogedIn(true);

          console.log(data.token);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  if (logedIn || token) return <Navigate to="/" />;
  return (
    <>
      <LoginContainer>
        <ImagesLogin></ImagesLogin>
        <section>
          <img alt="logo" src={logo} />
          <h1>Log in to your account</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>

            <input type="submit" value="Login" />
          </form>
          <div>
            <p>
              Don't have an account? <a href="#">Sign up</a>
            </p>
            <p>
              Lost password? <a href="#">Click here</a>
            </p>
          </div>
        </section>
      </LoginContainer>
    </>
  );
};

export default Login;
