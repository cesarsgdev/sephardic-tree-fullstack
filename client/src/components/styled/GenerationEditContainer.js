import styled from "styled-components";

export const GenerationEditContainer = styled.section`
  font-family: "PT Sans", sans-serif;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 0px 20px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;

  & button {
    display: flex;
    gap: 10px;
    background: var(--main-green);
    border: none;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
    font-family: "PT Sans", sans-serif;
    font-size: 16px;
  }

  & button:hover {
    background: var(--secondary-green);
  }

  & h3 {
    font-size: 18px;
    flex: 1 0 100%;
    text-align: center;
  }
`;
