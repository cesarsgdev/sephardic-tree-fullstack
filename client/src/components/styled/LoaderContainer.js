import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);

  & img {
    width: 500px;
  }
`;
