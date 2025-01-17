import React, { useState } from "react";

export const RowContexts = React.createContext([]);

function RowContextsProvider(props) {
  const { rows, onRowChange } = props;
  const [modifiedRow, setRows] = useState(rows);

  return (
    <RowContexts.Provider value={{ rows: modifiedRow, onRowChange, setRows }}>
      {props.children}
    </RowContexts.Provider>
  );
}

export default RowContextsProvider;
