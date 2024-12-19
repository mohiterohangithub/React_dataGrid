import { useEffect, useState } from "react";
import useThrottle from "./useThrottle";

function useResizeHeader(node, parentNode) {
  const [startPos, setStartPos] = useState({
    x: "",
  });
  const [resizePosition, setResizePosition] = useState({
    x: "",
  });
  const [resizeColumn, setResizeColumn] = useState({
    width: 0,
    columnName: "",
  });

  useEffect(() => {
    if (node.current !== null) {
      node.current?.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      const column = parentNode.current?.getAttribute("data-columnname");
      setResizeColumn((previous) => {
        return { ...previous, columnName: column };
      });
    }

    return () => {
      node.current?.removeEventListener("mousedown", handleMouseDown);
    };
  }, [node]);

  useEffect(() => {
    const width = resizePosition.x - startPos.x;
    if (width > 0) {
      setResizeColumn((previous) => {
        return { ...previous, width: width };
      });
    }
  }, [startPos, resizePosition]);

  const handleMouseMove = useThrottle((e) => {
    document.body.style.userSelect = "none";
    document.body.style.cursor = "col-resize";
    const dx = e.clientX;
    setResizePosition({ x: dx });
  }, 50);

  const handleMouseDown = (e) => {
    const { x } = parentNode.current.getBoundingClientRect();

    setStartPos({
      x: x,
    });
    window?.addEventListener("mousemove", handleMouseMove);
  };
  const handleMouseUp = () => {
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
    window?.removeEventListener("mousemove", handleMouseMove);
  };

  return { ...resizeColumn };
}

export default useResizeHeader;
