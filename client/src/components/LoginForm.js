import { useState } from "react";
import LoginError from "../components/LoginError";

const LoginForm = ({ changeStatus, changeActiveForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

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
        setEmail("");
        setPassword("");
        if (data.success) {
          localStorage.setItem("token", data.token);
          //   setLogedIn(true);
          changeStatus();
        } else {
          setError(data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <>
      <h1>Log in to your account</h1>
      <form onSubmit={handleSubmit}>
        {error && <LoginError message={error.message} />}

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
      <div className="loginOptions">
        <p>
          Don't have an account?{" "}
          <button
            onClick={(e) => {
              changeActiveForm("register");
            }}
          >
            Sign up
          </button>
        </p>
        <p>
          Lost password?{" "}
          <button
            onClick={(e) => {
              changeActiveForm("password");
            }}
          >
            Click here
          </button>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
