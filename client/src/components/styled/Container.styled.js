import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  ${({ height }) =>
    height ? "height:" + height + ";" : "height: fit-content;"}
  min-height: calc(100% - 150px);
  max-width: 2500px;
  margin: auto;
  ${({ flex }) => (flex ? "display: flex;" : "")}
  ${({ grid }) => (grid ? "display: grid;" : "")}
  ${({ flow }) => (flow ? "flex-flow:" + flow + ";" : "")}
  ${({ justify }) => (justify ? "justify-content:" + justify + ";" : "")}
  ${({ align }) => (align ? "align-items:" + align + ";" : "")}
  ${({ gap }) => (gap ? "gap:" + gap + ";" : "")}
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1000px 1000px 1000px;
  gap: 20px;
  ${({ pd }) => (pd ? "padding:" + pd + ";" : "padding:20px;")}

  & h1.noTrees {
    color: rgba(190, 190, 190, 1);
  }
`;
