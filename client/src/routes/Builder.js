import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Container } from "../components/styled/Container.styled";
import { TreeCanvas } from "../components/styled/TreeCanvas.styled";
import TreeControls from "../components/TreeControls";

const Builder = () => {
  const { id } = useParams();
  const [treeData, setTreeData] = useState(false);

  useEffect(() => {
    fetch(`../api/trees/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTreeData((treeData) => data.data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <>
      {!treeData && <Loader whatsLoading={"builder"} />}
      <Container pd="0" flex flow="row nowrap" gap="0px">
        <TreeCanvas></TreeCanvas>
        <TreeControls></TreeControls>
      </Container>
    </>
  );
};

export default Builder;
