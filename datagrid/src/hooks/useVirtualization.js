import { useState, useEffect, useMemo } from "react";

const useVirtualization = ({ GridRef, ChildRef, rows, rowHeight }) => {
  const [cells, setCells] = useState({ top: "", bottom: "" });
  const gridHeight = useMemo(() => {
    return GridRef?.current?.getBoundingClientRect()?.height;
  }, [GridRef.current]);

  const handleScroll = (e) => {
    console.log("e", e);
    let scrollTop = Number(e.currentTarget.scrollTop);

    const startIndex = Math.floor(scrollTop / rowHeight) || 0;
    const endIndex =
      Math.min(
        rows.length - 1,
        Math.floor((scrollTop + gridHeight) / rowHeight)
      ) || firstCells;
    setCells({ top: startIndex, bottom: endIndex });
  };

  const firstCells = useMemo(() => {
    return Math.ceil(
      GridRef?.current?.getBoundingClientRect().height / rowHeight
    );
  }, [GridRef.current]);

  useEffect(() => {
    setCells({ top: 0, bottom: firstCells });
  }, [GridRef.current]);

  useEffect(() => {
    ChildRef.current.addEventListener("scroll", handleScroll);
  }, [ChildRef.current]);

  return {
    ...cells,
    handleScroll,
  };
};
export default useVirtualization;
