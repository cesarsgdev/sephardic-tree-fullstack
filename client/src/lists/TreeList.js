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
import { ImLeaf } from "react-icons/im";
import { toast } from "react-toastify";

import "../styles/animation.css";

const TreeList = ({ data }) => {
  const [overlay, setOverlay] = useState(false);
  const [alert, setAlert] = useState(false);
  const [treeName, setTreeName] = useState("");
  const [inputStates, setInputStates] = useState(data);
  const [oldValue, setOldValue] = useState("");
  const [alertID, setAlertID] = useState("");

  const handleAlert = (e, id) => {
    setAlertID((aid) => id);
    setTreeName((name) => e.target.parentElement.getAttribute("treename"));
    setOverlay(!overlay);
  };

  const handleNameEdition = (e) => {
    e.target.removeAttribute("readOnly");
    setOldValue((value) => e.target.value);
  };

  const handleInputChange = (e) => {
    const index = e.target.getAttribute("data-index");
    const temp = [...inputStates];
    temp[index].name = e.target.value;
    setInputStates(temp);
  };

  const handleNameUpdate = (e) => {
    if (oldValue !== e.target.value) {
      e.target.setAttribute("readOnly", null);

      const payload = {
        name: e.target.value,
      };

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };

      fetch(`api/trees/${e.target.id}`, options)
        .then((response) => response.json())
        .then((data) => {
          toast.success(`Name change completed`, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          console.log(data);
        })
        .catch((e) => {
          console.log(e.message);
        });
    } else {
      return;
    }
  };

  const handleDeleteTree = (e) => {};

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
                <Button id={alertID} primary onClick={handleDeleteTree}>
                  Yes
                </Button>
              </div>
            </AlertContainer>
          </CSSTransition>
        </Overlay>
      </CSSTransition>

      <Container grid>
        <ReactTooltip />
        {data.map((tree, i) => {
          const date =
            tree.createdAt === tree.updatedAt ? new Date(tree.createdAt) : null;
          const update =
            tree.createdAt !== tree.updatedAt ? new Date(tree.updatedAt) : null;
          return (
            <TreeItem key={i} treename={tree.name}>
              <div data-tip="Generations" className="numberGenerations">
                {tree.generations.length} <ImLeaf />
              </div>
              <input
                id={tree._id}
                onClick={handleNameEdition}
                onBlur={handleNameUpdate}
                onChange={handleInputChange}
                type="text"
                data-index={i}
                value={inputStates[i].name}
                readOnly
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    e.target.blur();
                  }
                }}
              />
              {/* <h2>{tree.name}</h2> */}
              {date && (
                <span>
                  Created:{" "}
                  {`${date.getDate()}/${
                    date.getMonth() + 1
                  }/${date.getFullYear()}`}
                </span>
              )}

              {update && (
                <span>
                  Updated:{" "}
                  {`${update.getDate()}/${
                    update.getMonth() + 1
                  }/${update.getFullYear()}`}
                </span>
              )}
              <div className="treeControls" treename={tree.name}>
                <AiOutlineEye data-tip="View Tree" />
                <IoTrashOutline
                  className="delete"
                  data-tip="Delete Tree"
                  onClick={(e) => {
                    handleAlert(e, tree._id);
                  }}
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
