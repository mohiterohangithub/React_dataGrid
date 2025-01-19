import { useState, useEffect, useMemo, useRef } from "react";
import useThrottle from "./useThrottle";

const useVirtualization = ({ GridRef, modifiedRow, rowHeight }) => {
  const [cells, setCells] = useState([]);
  const scrollPositions = useRef({
    startIndex: null,
    endIndex: null,
  });
  const handleScroll = useThrottle((e) => {
    let scrollTop = Math.floor(GridRef?.current?.scrollTop);
    const startIndex = Math.floor(scrollTop / rowHeight) || 0;
    let gridHeight = GridRef?.current?.getBoundingClientRect()?.height;
    const endIndex = Math.min(
      modifiedRow?.length,
      Math.floor((scrollTop + gridHeight) / rowHeight)
    );
    if (startIndex && endIndex > -1) {
      let array = modifiedRow.slice(startIndex, endIndex);
      scrollPositions.current = {
        startIndex,
        endIndex,
      };
      setCells([...array]);
    }
  }, 100);

  const firstCells = useMemo(() => {
    return Math.ceil(
      GridRef?.current?.getBoundingClientRect().height / rowHeight
    );
  }, [GridRef.current, rowHeight]);

  useEffect(() => {
    let array = modifiedRow.slice(0, firstCells);
    setCells([...array]);
  }, [GridRef.current, firstCells]);

  useEffect(() => {
    if (
      scrollPositions.current?.startIndex &&
      scrollPositions.current?.endIndex
    ) {
      if (
        scrollPositions.current?.startIndex &&
        scrollPositions.current?.endIndex > -1
      ) {
        let array = modifiedRow.slice(
          scrollPositions.current?.startIndex,
          scrollPositions.current?.endIndex
        );
        setCells([...array]);
      }
    }
  }, [modifiedRow]);

  return {
    cells,
    handleScroll,
  };
};
export default useVirtualization;
