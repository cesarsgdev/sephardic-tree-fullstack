import styled from "styled-components";

export const LoginContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;

  & > div {
    position: relative;
    flex: 1 1 70%;
  }

  & div div.imagesOverlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    background: linear-gradient(
      to right,
      rgba(0, 128, 0, 0.5),
      rgba(116, 80, 29, 0.5)
    );
    background-blend-mode: multiply;
  }

  & div > img {
    object-fit: cover;
    opacity: 0.5;
    filter: grayscale();
  }

  & section {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex: 1 0 20%;
    min-height: 100vh;
  }

  & section img {
    height: 40px;
  }

  & section form {
    width: 65%;
    display: flex;
    flex-flow: column;
    gap: 20px;
  }

  & form label {
    font-size: 18px;
    font-weight: 700;
    display: flex;
    flex-flow: column;
    gap: 5px;
  }

  & form input[type="text"],
  form input[type="password"] {
    font-family: "PT Sans", sans-serif;
    font-size: 18px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  & form input[type="text"]:focus,
  form input[type="password"]:focus {
    outline: 2px solid var(--main-green);
  }

  & form input[type="submit"] {
    font-family: "PT Sans", sans-serif;
    font-size: 18px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background: var(--main-green);
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
  }

  & form input[type="submit"]:hover {
    background: var(--secondary-green);
  }

  & .loginOptions {
    text-align: center;
  }

  & .loginOptions button {
    background: transparent;
    border: none;
    font-family: "PT Sans";
    font-size: 18px;
    color: var(--main-brown);
    font-weight: 700;
    cursor: pointer;
  }
`;
