import { LoginErrorContainer } from "./styled/LoginErrorContainer.styled";

const LoginError = ({ message }) => {
  return (
    <>
      <LoginErrorContainer>{message}</LoginErrorContainer>
    </>
  );
};

export default LoginError;
