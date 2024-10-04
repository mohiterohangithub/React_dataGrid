import { useMemo, useContext } from "react";
import { ColumnContexts } from "../globalcontext/ColumnContexts";

function useColumnKey() {
  const { columns } = useContext(ColumnContexts);

  const columnKey = useMemo(() => {
    let arr = columns.map(({ key }) => {
      return key;
    });
    return arr;
  }, [columns]);
  return columnKey;
}

export default useColumnKey;
