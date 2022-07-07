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

import {
  MdAddBox,
  MdOutlineAccountCircle,
  MdPowerSettingsNew,
} from "react-icons/md";

const Home = () => {
  const [treeData, setTreeData] = useState(false);

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
        setTreeData(data.data);
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
        setTreeData([...treeData, data.data]);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const navigate = useNavigate();
  return (
    <>
      {!treeData && <Loader whatsLoading="trees"></Loader>}
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
            {treeData.length > 0 && (
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
      {!treeData.length && <NoTrees />}
      {treeData && <TreeList data={treeData} />}
    </>
  );
};

export default Home;
