import styled from "styled-components";

export const TreeItem = styled.article`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  height: fit-content;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 3px #c4c4c4;
  transition: 0.5s ease-in-out;
  user-select: none;
  border: 2px dotted transparent;

  &:hover {
    transform: scale(1.02);
    border: 2px dotted var(--main-green);
  }

  & input[type="text"] {
    font-family: "PT Sans", sans-serif;
    font-weight: 700;
    border: none;
    font-size: 24px;
    cursor: pointer;
    user-select: none;
  }

  & input[type="text"]:focus {
    outline: 1px dashed var(--main-green);
  }

  & input[type="text"]:read-only {
    font-family: "PT Sans", sans-serif;
    font-weight: 700;
    border: none;
    font-size: 24px;
    cursor: pointer;
    user-select: none;
  }

  & input[type="text"]:read-only:hover {
    outline: 1px dashed var(--main-green);
  }

  & input[type="text"]:read-only:focus {
    outline: 0;
  }

  & h2 {
    font-size: 24px;
    cursor: pointer;
  }

  & span {
    display: block;
    font-size: 14px;
    color: rgb(176, 176, 176);
  }

  & .treeControls {
    display: flex;
    gap: 10px;
    align-self: flex-end;
  }

  & .treeControls a {
    display: block;
    color: black;
    height: fit-content;
  }

  & .treeControls svg {
    font-size: 24px;
    cursor: pointer;
  }

  & .treeControls svg path {
    pointer-events: none;
  }

  & .treeControls svg.delete {
    color: var(--red);
  }

  & div.numberGenerations {
    color: var(--main-brown);
    font-weight: 700;
    font-size: 14px;
    align-self: flex-end;
    border-radius: 5px;
  }

  & div.numberGenerations svg {
    color: var(--main-green);

    font-size: 12px;
  }
`;
