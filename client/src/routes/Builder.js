import { useState, useEffect } from "react";
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
import Forms from "../components/forms/Forms";
import transparentBG from "../transparent-bg.jpeg";
import { CSSTransition } from "react-transition-group";
import useForms from "../components/forms/useForms";
import useCopy from "../hooks/useCopy";
import useZoom from "../hooks/useZoom";
import "../styles/animation.css";

const Builder = () => {
  const { id } = useParams();
  const [treeData, setTreeData] = useState(false);
  const [table, copyTable] = useCopy();
  const { formActive, forms, typeOfForm, handleForm, hide } = useForms();
  const [canvas, zoom, zoomIn] = useZoom();

  useEffect(() => {
    if (!treeData) {
      fetch(`../api/trees/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // console.log(data);
            setTreeData((treeData) => data.data);
          }
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
    if (canvas.current) {
      canvas.current.addEventListener("wheel", zoomIn);
    }
  }, [treeData]);

  return (
    <>
      <CSSTransition
        in={forms}
        timeout={200}
        classNames="forms"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Forms ref={formActive} type={typeOfForm} />
      </CSSTransition>
      {!treeData && <Loader whatsLoading={"builder"} />}
      {treeData && (
        <Container pd="0" flex flow="row nowrap" gap="0px">
          <TreeCanvas
            ref={canvas}
            cbi={transparentBG}
            onClick={() => {
              hide();
            }}
          >
            <TreeContainer ref={table} scl={zoom}>
              <TableBody>
                <Generations data={treeData} />
              </TableBody>
            </TreeContainer>
          </TreeCanvas>
          <TreeControls
            showPrincipal={handleForm}
            showPartner={handleForm}
            showMarriage={handleForm}
            copyFunction={copyTable}
          ></TreeControls>
        </Container>
      )}
    </>
  );
};

export default Builder;
