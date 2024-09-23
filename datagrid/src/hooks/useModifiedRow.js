import { useMemo } from "react";

function useModifiedRow({ rows }) {
  const row = useMemo(() => {
    let count = 1;
    const rowArray = [];
    for (const obj of rows) {
      rowArray.push({ ...obj, rowID: count });
      count++;
    }
    return rowArray;
  }, [rows]);
  return row;
}

export default useModifiedRow;
