import { useState } from "react";

const LostPasswordForm = ({ changeActiveForm }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <h1>Recover password</h1>
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

        <input type="submit" value="Recover password" />
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

export default LostPasswordForm;
