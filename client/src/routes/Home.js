import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTreeActions from "../hooks/useTreeActions";
import { Header } from "../components/styled/Header.styled";
import { Container } from "../components/styled/Container.styled";
import { Button } from "../components/styled/Button.styled";
import { Overlay } from "../components/styled/Overlay.styled";
import { AlertContainer } from "../components/styled/AlertContainer.styled";
import Loader from "../components/Loader";
import NoTrees from "../components/NoTrees";
import TreeList from "../lists/TreeList";
import { CSSTransition } from "react-transition-group";
import ReactTooltip from "react-tooltip";
import {
  MdAddBox,
  MdOutlineAccountCircle,
  MdPowerSettingsNew,
} from "react-icons/md";
import logo from "../logo.svg";

const Home = () => {
  const {
    treesData,
    handleAlert,
    treeName,
    alertID,
    handleNewTree,
    handleDeleteTree,
    overlay,
    setTreeName,
    setOverlay,
    homeLoaded,
  } = useTreeActions();
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {(homeLoaded.current = true)}
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
            )}
            <MdOutlineAccountCircle
              className="myAccount"
              data-tip="My Account"
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
