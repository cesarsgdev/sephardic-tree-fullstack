import { useState } from "react";

const LostPasswordForm = () => {
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
    </>
  );
};

export default LostPasswordForm;
