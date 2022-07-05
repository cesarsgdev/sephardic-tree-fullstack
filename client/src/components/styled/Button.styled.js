import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => (width ? width : `150px`)};
  height: ${({ height }) => (height ? height : `50px`)};
  background: ${(props) =>
    props.primary ? `var(--main-green)` : `var(--main-brown)`};
  color: #fff;
  border: none;
  font-family: "PT Sans", sans-serif;
  font-size: ${({ fs }) => (fs ? fs : `18px`)};
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
`;
