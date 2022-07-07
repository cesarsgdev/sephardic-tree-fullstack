import { useState, useRef, useCallback } from "react";

const useZoom = () => {
  const canvas = useRef();
  const [zoom, setZoom] = useState(1.25);
  const zoomAmount = useRef(1.25);

  const zoomIn = useCallback((e) => {
    e.preventDefault();
    if (e.deltaY <= 0 && zoomAmount.current < 3) {
      zoomAmount.current += 0.05;
    }
    if (e.deltaY > 0 && zoomAmount.current > 0.05) {
      zoomAmount.current -= 0.05;
    }

    setZoom((zoomCurrent) => zoomAmount.current);
  });

  return [canvas, zoom, zoomIn];
};

export default useZoom;
