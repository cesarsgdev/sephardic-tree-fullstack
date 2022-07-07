import { useRef } from "react";
import { toast } from "react-toastify";

const useCopy = (e) => {
  const table = useRef();

  const copy = () => {
    console.log("started copy");
    const elTable = table.current;

    let range, sel;

    // Ensure that range and selection are supported by the browsers
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      // unselect any element in the page
      sel.removeAllRanges();

      try {
        range.selectNodeContents(elTable);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(elTable);
        sel.addRange(range);
      }

      document.execCommand("copy");
    }

    sel.removeAllRanges();

    toast.success(`Tree Copied`, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    console.log("Element Copied! Paste it in a file");
  };

  return [table, copy];
};

export default useCopy;
