import { useState } from "react";
import { Container } from "../components/styled/Container.styled";
import { TreeItem } from "../components/styled/TreeItem.styled";
import { BsBoxArrowInRight, BsFillEyeFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { IoTrashBinSharp, IoTrashOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Overlay } from "../components/styled/Overlay.styled";
import { AlertContainer } from "../components/styled/AlertContainer.styled";
import ReactTooltip from "react-tooltip";
import { CSSTransition } from "react-transition-group";
import { Button } from "../components/styled/Button.styled";

import "../styles/animation.css";

const TreeList = ({ data }) => {
  const [overlay, setOverlay] = useState(false);
  const [alert, setAlert] = useState(false);
  const [treeName, setTreeName] = useState("");

  const handleAlert = (e) => {
    setTreeName((name) => e.target.parentElement.getAttribute("treename"));
    console.log(e.target);
    setOverlay(!overlay);
  };
  return (
    <>
      <CSSTransition
        in={overlay}
        timeout={200}
        classNames="overlay"
        mountOnEnter={true}
        unmountOnExit={true}
        onEntering={() => {
          setAlert(true);
        }}
        onExited={() => {
          setTreeName((name) => "");
        }}
        onExiting={() => {
          setAlert(false);
        }}
      >
        <Overlay>
          <CSSTransition
            in={alert}
            timeout={500}
            classNames="alert"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <AlertContainer>
              <h2>
                Are you sure you want to delete the family tree "{treeName}"?
              </h2>
              <div className="deleteActionButtons">
                <Button
                  onClick={() => {
                    setOverlay(!overlay);
                  }}
                >
                  Cancel
                </Button>
                <Button primary>Yes</Button>
              </div>
            </AlertContainer>
          </CSSTransition>
        </Overlay>
      </CSSTransition>

      <Container grid>
        <ReactTooltip />
        {data.map((tree, i) => {
          const date = new Date(tree.createdAt);
          return (
            <TreeItem key={i} treeName={tree.name}>
              <h2>{tree.name}</h2>
              <span>
                Created:{" "}
                {`${date.getDate()}/${
                  date.getMonth() + 1
                }/${date.getFullYear()}`}
              </span>
              <div className="treeControls" treename={tree.name}>
                <AiOutlineEye data-tip="View Tree" />
                <IoTrashOutline
                  className="delete"
                  data-tip="Delete Tree"
                  onClick={handleAlert}
                />
                <Link to={`tree/${tree._id}`}>
                  <BiEdit data-tip="Edit Tree" />
                </Link>
              </div>
            </TreeItem>
          );
        })}
      </Container>
    </>
  );
};

export default TreeList;
