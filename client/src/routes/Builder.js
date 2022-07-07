import { useState, useEffect, useRef, useCallback } from "react";
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
import { toast } from "react-toastify";
import { CSSTransition } from "react-transition-group";
import useForms from "../components/forms/useForms";
import "../styles/animation.css";

const Builder = () => {
  const { id } = useParams();
  const [treeData, setTreeData] = useState(false);
  const table = useRef();
  const canvas = useRef();
  const { formActive, forms, typeOfForm, handleForm, hide } = useForms();
  const [zoom, setZoom] = useState(1.25);
  const zoomAmount = useRef(1.25);

  const zoomIn = useCallback((e) => {
    e.preventDefault();
    if (e.deltaY <= 0 && zoomAmount.current < 3) {
      zoomAmount.current += 0.05;
    }
    if (e.deltaY > 0 && zoomAmount.current > 0.05) {
      zoomAmount.current -= 0.05;
    }

    setZoom((zoomCurrent) => zoomAmount.current);
  });

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

  // useEffect(() => {
  //   console.log("Effect ran!");
  //   console.log(table.current);
  // }, [table.current]);

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
            // onWheel={(e) => {
            //   console.log(`movement!`);
            // }}
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
            copyFunction={handleCopy}
          ></TreeControls>
        </Container>
      )}
    </>
  );
};

export default Builder;
