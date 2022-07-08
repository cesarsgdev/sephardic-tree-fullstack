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
import { CSSTransition } from "react-transition-group";
import useForms from "../components/forms/useForms";
import useCopy from "../hooks/useCopy";
import useZoom from "../hooks/useZoom";
import useTreeActions from "../hooks/useTreeActions";
import "../styles/animation.css";
import transparentBG from "../transparent-bg.jpeg";

const Builder = () => {
  const [table, copyTable] = useCopy();
  const { treeData, builderLoaded } = useTreeActions();
  const [canvas, zoom, zoomIn] = useZoom(treeData);
  const { formActive, forms, typeOfForm, handleForm, hide } = useForms();

  return (
    <>
      {(builderLoaded.current = true)}

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
            copyFunction={copyTable}
          ></TreeControls>
        </Container>
      )}
    </>
  );
};

export default Builder;
