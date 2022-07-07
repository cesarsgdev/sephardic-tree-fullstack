import styled from "styled-components";

export const TreeControlsContainer = styled.section`
  display: flex;
  flex-flow: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex: 0 1 10%;
  padding: 20px;

  & button {
    width: 80%;
    height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: var(--main-green);
    color: #fff;
    font-size: 18px;
    font-family: "PT Sans", sans-serif;
    gap: 10px;
    border: 2px solid transparent;
    border-radius: 5px;
    transition: 0.5s;
    user-select: none;
    cursor: pointer;
  }

  & button:hover {
    background: var(--secondary-green);
  }

  & button svg {
    font-size: 36px;
  }
`;
