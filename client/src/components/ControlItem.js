import ReactTooltip from "react-tooltip";

const ControlItem = ({ icon, text, tooltip, click, isEditing = false }) => {
  return (
    <>
      <ReactTooltip wrapper="span" />
      <button
        onClick={(e) => {
          e.stopPropagation();
          click(text, isEditing);
        }}
        data-tip={tooltip}
        data-place="top"
        data-effect="solid"
        data-background-color="var(--main-brown)"
      >
        {icon}
        {text}
      </button>
    </>
  );
};
export default ControlItem;
