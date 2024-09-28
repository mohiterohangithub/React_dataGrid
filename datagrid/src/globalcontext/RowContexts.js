import React from "react";

export const RowContexts = React.createContext([]);

function RowContextsProvider(props) {
  const { rows } = props;

  return (
    <RowContexts.Provider value={rows}>{props.children}</RowContexts.Provider>
  );
}

export default RowContextsProvider;
