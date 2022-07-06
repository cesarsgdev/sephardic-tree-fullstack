import styled from "styled-components";

export const AlertContainer = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  width: 33%;
  height: fit-content;
  background: #fff;
  z-index: 1000;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #c4c4c4;
  padding: 50px;
  text-align: center;
  border: 1px solid lightgray;

  & .deleteActionButtons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;
