import { useState } from "react";

const RegisterForm = ({ changeActiveForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>Register a new account</h1>
      <form>
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

        <input type="submit" value="Register" />
      </form>
      <div className="loginOptions">
        <p>
          <button
            onClick={(e) => {
              changeActiveForm("login");
            }}
          >
            Back to login
          </button>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
