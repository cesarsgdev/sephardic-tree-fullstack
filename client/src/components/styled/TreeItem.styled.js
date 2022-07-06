import styled from "styled-components";

export const TreeItem = styled.article`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  height: fit-content;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 3px #c4c4c4;
  transition: 2s;
  user-select: none;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid green;
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
`;
