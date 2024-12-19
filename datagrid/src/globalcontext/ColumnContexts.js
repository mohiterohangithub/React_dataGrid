import React, { useState } from "react";

export const ColumnContexts = React.createContext([]);

function ColumnContextsProvider(props) {
  const [modifiedColumns, setModifiedColumns] = useState(props.columns);
  const { columnsMap } = props;
  return (
    <ColumnContexts.Provider
      value={{ modifiedColumns, columnsMap, setModifiedColumns }}
    >
      {props.children}
    </ColumnContexts.Provider>
  );
}

export default ColumnContextsProvider;
