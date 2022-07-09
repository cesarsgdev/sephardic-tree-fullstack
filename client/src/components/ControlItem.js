import ReactTooltip from "react-tooltip";

const ControlItem = ({ icon, text, tooltip, click }) => {
  return (
    <>
      <ReactTooltip wrapper="span" />
      <button
        onClick={() => {
          click(text);
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
