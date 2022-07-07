import ReactTooltip from "react-tooltip";

const ControlItem = ({ icon, text, tooltip, click }) => {
  return (
    <>
      <ReactTooltip />
      <button onClick={click} data-tip={tooltip}>
        {icon}
        {text}
      </button>
    </>
  );
};
export default ControlItem;
