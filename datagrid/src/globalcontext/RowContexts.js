import React from "react";

export const RowContexts = React.createContext([]);

function RowContextsProvider(props) {
  const { rows, onRowChange } = props;

  return (
    <RowContexts.Provider value={{ rows, onRowChange }}>
      {props.children}
    </RowContexts.Provider>
  );
}

export default RowContextsProvider;
