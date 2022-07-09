import ControlItem from "./ControlItem";
import { ImUser, ImUsers } from "react-icons/im";
import { GiLinkedRings } from "react-icons/gi";
import { FaRing } from "react-icons/fa";
import { GenerationEditContainer } from "./styled/GenerationEditContainer";

import useForms from "./forms/useForms";
import { CSSTransition } from "react-transition-group";
import Forms from "./forms/Forms";
import "../styles/animation.css";

const GenerationControls = ({ showForms }) => {
  return (
    <>
      <GenerationEditContainer>
        <h3>Edit</h3>
        <ControlItem
          click={showForms}
          icon={<ImUser />}
          text="Principal"
          isEditing
        ></ControlItem>
        <ControlItem
          click={showForms}
          icon={<FaRing />}
          text="Marriage"
          isEditing
        ></ControlItem>
        <ControlItem
          click={showForms}
          icon={<ImUsers />}
          text="Partner"
          isEditing
        ></ControlItem>
      </GenerationEditContainer>
    </>
  );
};

export default GenerationControls;
