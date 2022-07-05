import styled, { keyframes } from "styled-components";

const moveLoader = keyframes`
  from {
    transform: translateX(0px);
  }

  to {
    transform: translateX(500px);
  }
`;

export const LoadBar = styled.div`
  overflow: hidden;
  position: relative;
  width: 500px;
  height: 15px;
  background: var(--main-green);
  border-radius: 5px;

  & .loader {
    width: 50px;
    height: 100%;
    background: var(--secondary-green);
    transform: rotate(-45deg);
    animation: ${moveLoader} 0.75s linear infinite;
  }
`;
