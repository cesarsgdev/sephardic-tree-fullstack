import ReactTooltip from "react-tooltip";

const ControlItem = ({ icon, text, tooltip }) => {
  return (
    <>
      <ReactTooltip />
      <button data-tip={tooltip}>
        {icon}
        {text}
      </button>
    </>
  );
};
export default ControlItem;
