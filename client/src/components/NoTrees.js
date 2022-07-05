import { Container } from "./styled/Container.styled";
import { Button } from "./styled/Button.styled";

const NoTrees = () => {
  return (
    <>
      <Container
        flex
        flow="column nowrap"
        justify="center"
        align="center"
        height="calc(100vh - 80px)"
      >
        <h1 className="noTrees">No trees available. Please create one.</h1>
        <Button width="15%" height="60px" fs="24px" primary>
          Create Tree
        </Button>
      </Container>
    </>
  );
};

export default NoTrees;
