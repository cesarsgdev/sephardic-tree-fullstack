import styled from "styled-components";

export const TreeCanvas = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 90%;
  min-height: 100vh;
  background: ${({ cbi }) => (cbi ? `url(${cbi})` : "")}, rgba(220, 220, 220, 1);
  background-blend-mode: darken;
  background-repeat: repeat;
  background-size: 500px;
  overflow: auto;
`;
