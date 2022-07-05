import { NotFoundContainer } from "../components/styled/NotFoundContainer.styled";
import logo from "../logo.svg";

const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <img src={logo} alt="Sephardic Tree Logo" />
        <h1>Sorry, nothing to see here!</h1>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
