import { LoaderContainer } from "./styled/LoaderContainer.styled";
import { LoadBar } from "./styled/LoadBar.styled";
import logo from "../logo.svg";

const Loader = ({ whatsLoading }) => {
  return (
    <>
      <LoaderContainer>
        <img src={logo} alt="Logo Sephardic Tree" />
        <LoadBar>
          <div className="loader"></div>
        </LoadBar>
        <h1>Loading {whatsLoading}...</h1>
      </LoaderContainer>
    </>
  );
};

export default Loader;
