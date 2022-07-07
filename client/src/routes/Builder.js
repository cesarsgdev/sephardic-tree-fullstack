import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Container } from "../components/styled/Container.styled";
import { TreeCanvas } from "../components/styled/TreeCanvas.styled";
import TreeControls from "../components/TreeControls";
import {
  TreeContainer,
  TableBody,
} from "../components/styled/TreeContainer.styled";
import Generations from "../lists/Generations";
import transparentBG from "../transparent-bg.jpeg";
import { toast } from "react-toastify";

const Builder = () => {
  const { id } = useParams();
  const [treeData, setTreeData] = useState(false);
  const table = useRef();

  useEffect(() => {
    fetch(`../api/trees/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          setTreeData((treeData) => data.data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleCopy = (e) => {
    console.log("started copy");
    const elTable = table.current;

    let range, sel;

    // Ensure that range and selection are supported by the browsers
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      // unselect any element in the page
      sel.removeAllRanges();

      try {
        range.selectNodeContents(elTable);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(elTable);
        sel.addRange(range);
      }

      document.execCommand("copy");
    }

    sel.removeAllRanges();

    toast.success(`Tree Copied`, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    // console.log("Element Copied! Paste it in a file");
  };
  return (
    <>
      {!treeData && <Loader whatsLoading={"builder"} />}
      {treeData && (
        <Container pd="0" flex flow="row nowrap" gap="0px">
          <TreeCanvas cbi={transparentBG}>
            <TreeContainer draggable ref={table}>
              <TableBody>
                <Generations data={treeData} />
              </TableBody>
            </TreeContainer>
          </TreeCanvas>
          <TreeControls copyFunction={handleCopy}></TreeControls>
        </Container>
      )}
    </>
  );
};

export default Builder;
