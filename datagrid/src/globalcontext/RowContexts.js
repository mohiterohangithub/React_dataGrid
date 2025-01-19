import React, { useState, memo, useMemo, useEffect } from "react";

export const RowContexts = React.createContext([]);

function RowContextsProvider(props) {
  const { rows, onRowChange } = props;
  const [modifiedRow, setRows] = useState(rows);

  const defaultRows = useMemo(() => {
    return rows;
  }, [props]);

  return (
    <RowContexts.Provider
      value={{
        rows: modifiedRow,
        onRowChange,
        setRows,
        defaultRows: defaultRows,
      }}
    >
      {props.children}
    </RowContexts.Provider>
  );
}

export default memo(RowContextsProvider);
