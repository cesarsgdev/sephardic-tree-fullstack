import ControlItem from "./ControlItem";
import { ImUser, ImUsers } from "react-icons/im";
import { GiLinkedRings } from "react-icons/gi";
import { FaRing } from "react-icons/fa";
import { GenerationEditContainer } from "./styled/GenerationEditContainer";

const GenerationControls = () => {
  return (
    <>
      <GenerationEditContainer>
        <h3>Edit</h3>
        <ControlItem icon={<ImUser />} text="Principal"></ControlItem>
        <ControlItem icon={<FaRing />} text="Marriage"></ControlItem>
        <ControlItem icon={<ImUsers />} text="Partner"></ControlItem>
      </GenerationEditContainer>
    </>
  );
};

export default GenerationControls;
