import React from "react";

export const ColumnContexts = React.createContext([]);

function ColumnContextsProvider(props) {
  const { columns, columnsMap } = props;

  return (
    <ColumnContexts.Provider value={{ columns, columnsMap }}>
      {props.children}
    </ColumnContexts.Provider>
  );
}

export default ColumnContextsProvider;
