import { useMemo, useContext } from "react";
import { ColumnContexts } from "../globalcontext/ColumnContexts";

function useColumnKey() {
  const { modifiedColumns } = useContext(ColumnContexts);

  const columnKey = useMemo(() => {
    let arr = modifiedColumns.map(({ key }) => {
      return key;
    });
    return arr;
  }, [modifiedColumns]);
  return columnKey;
}

export default useColumnKey;
