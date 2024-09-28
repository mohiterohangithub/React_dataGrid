import React from "react";

export const ColumnContexts = React.createContext([]);

function ColumnContextsProvider(props) {
  const { columns } = props;

  return (
    <ColumnContexts.Provider value={columns}>
      {props.children}
    </ColumnContexts.Provider>
  );
}

export default ColumnContextsProvider;
