import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 0px 2px 2px #d8d8d8;

  & img {
    width: 250px;
  }

  & div.buttonsHeader {
    display: flex;
    gap: 20px;
  }

  & div.buttonsHeader svg {
    font-size: 30px;
    cursor: pointer;
  }

  & svg.newTree {
    color: var(--main-green);
  }

  & svg.myAccount {
    color: var(--main-brown);
  }

  & svg.logout {
    color: var(--red);
  }
`;
