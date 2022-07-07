import { useState, useEffect, useRef, forwardRef } from "react";
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
import PersonForm from "../components/forms/PersonForm";
import transparentBG from "../transparent-bg.jpeg";
import { toast } from "react-toastify";
import { CSSTransition } from "react-transition-group";
import "../styles/animation.css";

const Builder = () => {
  const { id } = useParams();
  const [treeData, setTreeData] = useState(false);
  const [forms, setForms] = useState(false);
  const table = useRef();
  const formActive = useRef();
  const [typeOfForm, setTypeOfForm] = useState("");

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

  const handlePrincipal = (e) => {
    if (formActive.current) {
      setForms(false);
      setTimeout(() => {
        setTypeOfForm("Principal");
        setForms(true);
      }, 210);
    } else {
      setTypeOfForm("Principal");
      setForms(true);
    }
  };

  const handlePartner = (e) => {
    if (formActive.current) {
      setForms(false);
      setTimeout(() => {
        setTypeOfForm("Partner");
        setForms(true);
      }, 210);
    } else {
      setTypeOfForm("Partner");
      setForms(true);
    }
  };

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
        <PersonForm ref={formActive} type={typeOfForm} />
      </CSSTransition>
      {!treeData && <Loader whatsLoading={"builder"} />}
      {treeData && (
        <Container pd="0" flex flow="row nowrap" gap="0px">
          <TreeCanvas
            cbi={transparentBG}
            onClick={() => {
              setForms(false);
            }}
          >
            <TreeContainer ref={table}>
              <TableBody>
                <Generations data={treeData} />
              </TableBody>
            </TreeContainer>
          </TreeCanvas>
          <TreeControls
            showPrincipal={handlePrincipal}
            showPartner={handlePartner}
            copyFunction={handleCopy}
          ></TreeControls>
        </Container>
      )}
    </>
  );
};

export default Builder;
