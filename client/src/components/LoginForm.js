import { useState } from "react";

const LoginForm = ({ changeStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          //   setLogedIn(true);
          changeStatus();
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <>
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
    </>
  );
};

export default LoginForm;
