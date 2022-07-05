import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { Header } from "../components/styled/Header.styled";
import { Container } from "../components/styled/Container.styled";
import { Button } from "../components/styled/Button.styled";
import logo from "../logo.svg";
import NoTrees from "../components/NoTrees";

const Home = () => {
  const [treeData, setTreeData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTreeData([]);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {!treeData && <Loader whatsLoading="trees"></Loader>}
      <Header>
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
            {treeData.length > 0 && <Button primary>New Tree</Button>}
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </Button>
          </div>
        </Container>
      </Header>
      {!treeData.length && <NoTrees />}
    </>
  );
};

export default Home;
