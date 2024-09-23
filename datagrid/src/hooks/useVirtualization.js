import { useState, useEffect, useMemo } from "react";

const useVirtualization = ({ GridRef, modifiedRow, rowHeight }) => {
  const [cells, setCells] = useState([]);

  const handleScroll = (e) => {
    let scrollTop = Math.floor(GridRef?.current?.scrollTop);
    const startIndex = Math.floor(scrollTop / rowHeight) || 0;
    let gridHeight = GridRef?.current?.getBoundingClientRect()?.height;
    const endIndex = Math.min(
      modifiedRow?.length,
      Math.floor((scrollTop + gridHeight) / rowHeight)
    );
    if (startIndex && endIndex > -1) {
      let array = modifiedRow.slice(startIndex, endIndex);
      setCells([...array]);
    }
  };

  const firstCells = useMemo(() => {
    return Math.ceil(
      GridRef?.current?.getBoundingClientRect().height / rowHeight
    );
  }, [GridRef.current, rowHeight]);

  useEffect(() => {
    let array = modifiedRow.slice(0, firstCells);
    setCells([...array]);
  }, [GridRef.current, firstCells]);

  return {
    cells,
    handleScroll,
  };
};
export default useVirtualization;
