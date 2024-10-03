import { useMemo, useContext } from "react";
import { ColumnContexts } from "../globalcontext/ColumnContexts";

function useColumnKey() {
  const column = useContext(ColumnContexts);

  const columnKey = useMemo(() => {
    let arr = column.map(({ key }) => {
      return key;
    });
    return arr;
  }, [column]);
  return columnKey;
}

export default useColumnKey;
