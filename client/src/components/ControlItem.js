import ReactTooltip from "react-tooltip";

const ControlItem = ({ icon, text, tooltip, click }) => {
  return (
    <>
      <ReactTooltip />
      <button
        onClick={() => {
          click(text);
        }}
        data-tip={tooltip}
      >
        {icon}
        {text}
      </button>
    </>
  );
};
export default ControlItem;
