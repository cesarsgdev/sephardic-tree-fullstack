import { useState, useEffect } from "react";
import { Container } from "../components/styled/Container.styled";
import { TreeItem } from "../components/styled/TreeItem.styled";
import { BiEdit } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ImLeaf } from "react-icons/im";
import { toast } from "react-toastify";
import "../styles/animation.css";

const TreeList = ({ treesData, showAlert }) => {
  const [trees, setTrees] = useState(treesData);
  const [oldValue, setOldValue] = useState("");

  const handleNameEdition = (e) => {
    e.target.removeAttribute("readOnly");
    setOldValue((value) => e.target.value);
  };

  const handleInputChange = (e) => {
    const index = e.target.getAttribute("data-index");
    const temp = [...trees];
    temp[index].name = e.target.value;
    setTrees(temp);
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

  return (
    <>
      <Container grid>
        <ReactTooltip />
        <TransitionGroup component={null}>
          {treesData.map((tree, i) => {
            const date =
              tree.createdAt === tree.updatedAt
                ? new Date(tree.createdAt)
                : null;
            const update =
              tree.createdAt !== tree.updatedAt
                ? new Date(tree.updatedAt)
                : null;
            return (
              <CSSTransition key={tree._id} timeout={500} classNames="treeItem">
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
                    value={treesData[i].name}
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
                        showAlert(e, tree._id);
                      }}
                    />
                    <Link to={`builder/${tree._id}`}>
                      <BiEdit data-tip="Edit Tree" />
                    </Link>
                  </div>
                </TreeItem>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </Container>
    </>
  );
};

export default TreeList;
