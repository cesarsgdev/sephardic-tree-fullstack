import styled from "styled-components";

export const TreeContainer = styled.table`
  font-family: sans-serif;
  font-size: 9.5pt;
  width: 7in;
  transition: 0.5s;
  transform: ${({ scl }) => `scale(${scl})`};
  user-select: none;

  & tr {
    background: #fff;
    cursor: pointer;
  }

  & td {
    position: relative;
    border: 1px solid #000;
  }

  & td.generation {
    font-weight: bold;
    text-align: center;
    width: 1.65in;
    padding: 10px;
  }

  & td.generationInfo {
    width: 5.35in;
    padding: 5px;
  }

  & td span {
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableData = styled.td``;
