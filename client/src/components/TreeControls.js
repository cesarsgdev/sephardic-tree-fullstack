import { TreeControlsContainer } from "./styled/TreeControlsContainer.styled";
import ControlItem from "./ControlItem";
import { ImUser, ImUsers } from "react-icons/im";
import { GiLinkedRings } from "react-icons/gi";
import { FaCopy } from "react-icons/fa";

const TreeControls = ({
  copyFunction,
  showPrincipal,
  showMarriage,
  showPartner,
}) => {
  return (
    <>
      <TreeControlsContainer>
        <ControlItem
          click={showPrincipal}
          icon={<ImUser />}
          text="Principal"
          tooltip="Add Principal"
        />
        <ControlItem
          click={showMarriage}
          icon={<GiLinkedRings />}
          text="Marriage"
          tooltip="Add Marriage"
        />
        <ControlItem
          click={showPartner}
          icon={<ImUsers />}
          text="Partner"
          tooltip="Add Partner"
        />
        <ControlItem
          click={copyFunction}
          icon={<FaCopy />}
          text="Copy"
          tooltip="Copy Tree"
        />
      </TreeControlsContainer>
    </>
  );
};
export default TreeControls;
