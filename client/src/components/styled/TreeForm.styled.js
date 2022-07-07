import styled from "styled-components";

export const TreeForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  width: 600px;
  height: 100%;
  background: #fff;
  z-index: 1000;
  padding: 20px;
  border-right: 10px solid var(--main-green);
  gap: 30px;

  & h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    margin-bottom: 10px;
  }

  & h1 svg {
    color: var(--main-brown);
  }

  & h2 {
    font-size: 18px;
    text-transform: uppercase;
  }

  & label {
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
    font-weight: 700;
    user-select: none;
  }

  & .checkBoxOptions {
    display: flex;
    gap: 10px;
  }

  & label.checkBoxes {
    flex-flow: row;
  }

  & input[type="text"],
  input[type="password"] {
    font-family: "PT Sans", sans-serif;
    font-size: 18px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  & input[type="text"]:focus,
  input[type="password"]:focus {
    outline: 2px solid var(--main-green);
  }

  & input[type="submit"] {
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

  & input[type="submit"]:hover {
    background: var(--secondary-green);
  }

  & select {
    width: 50%;
    height: 40px;
    font-size: 18px;
    font-family: var(--main-font);
    padding: 0 10px;
    border-radius: 5px;
  }
`;
