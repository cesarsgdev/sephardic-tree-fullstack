import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { Header } from "../components/styled/Header.styled";
import { Container } from "../components/styled/Container.styled";
import { Button } from "../components/styled/Button.styled";
import logo from "../logo.svg";
import NoTrees from "../components/NoTrees";
import TreeList from "../lists/TreeList";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";
import { Overlay } from "../components/styled/Overlay.styled";
import { AlertContainer } from "../components/styled/AlertContainer.styled";
import { CSSTransition } from "react-transition-group";
import {
  MdAddBox,
  MdOutlineAccountCircle,
  MdPowerSettingsNew,
} from "react-icons/md";

const Home = () => {
  const [treesData, settreesData] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [alert, setAlert] = useState(false);
  const [treeName, setTreeName] = useState("");
  const [alertID, setAlertID] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    };
    fetch("api/trees", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        settreesData(data.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleNewTree = () => {
    const payLoad = {
      generations: [],
      uid: "62c49e0f57684a9e72992c2d",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(payLoad),
    };

    fetch("api/trees", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success(`Added tree ${data.data.name}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        settreesData([...treesData, data.data]);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleAlert = (e, id) => {
    setAlertID((aid) => id);
    setTreeName((name) => e.target.parentElement.getAttribute("treename"));
    setOverlay(!overlay);
  };

  const handleDeleteTree = (e) => {
    console.log(e.target.id);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`api/trees/${e.target.id}`, options)
      .then((response) => response.json())
      .then((data) => {
        toast.success(`Tree "${data.data.name}" deleted`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log(data);
        setOverlay(!overlay);
        settreesData((treeItems) =>
          treesData.filter((tree) => tree._id !== data.data._id)
        );
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const navigate = useNavigate();
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
      {!treesData && <Loader whatsLoading="trees"></Loader>}
      <Header>
        <ReactTooltip />
        <Container
          flex
          flow="row nowrap"
          justify="space-between"
          align="center"
          pd="0px 20px"
          height="100%"
        >
          <img src={logo} alt="Sephardic Tree Logo" />
          <div className="buttonsHeader">
            {treesData.length > 0 && (
              <MdAddBox
                onClick={handleNewTree}
                className="newTree"
                data-tip="Add new Tree"
              />
              // <Button onClick={handleNewTree} primary>
              //   New Tree
              // </Button>
            )}
            {/* <Button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </Button> */}

            <MdOutlineAccountCircle
              className="myAccount"
              data-tip="My Account"
              onClick={() => {
                toast.success("Clicked account!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }}
            />
            <MdPowerSettingsNew
              className="logout"
              data-tip="Logout"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login", { replace: true });
              }}
            />
          </div>
        </Container>
      </Header>
      {!treesData.length && <NoTrees />}
      {treesData && (
        <TreeList
          treesData={treesData}
          deleteTree={handleDeleteTree}
          showAlert={handleAlert}
        />
      )}
    </>
  );
};

export default Home;
