import React from "react";
import { useColumnMap, useModifiedRow } from "../../hooks/index";
import ColumnContextsProvider from "../../globalcontext/ColumnContexts";
import RowContextsProvider from "../../globalcontext/RowContexts";
import useModifiedColumns from "../../hooks/useModifiedColumns";
import MainGrid from "./MainGrid";

function ReactDataGrid(props) {
  const { columns, rows, rowHeight = 45, onRowChange } = props;
  const modifiedRow = useModifiedRow({ rows });
  const modifiedColumns = useModifiedColumns({ columns });
  const columnsMap = useColumnMap({ columns });
  return (
    <RowContextsProvider rows={modifiedRow} onRowChange={onRowChange}>
      <ColumnContextsProvider columns={modifiedColumns} columnsMap={columnsMap}>
        <div style={{ width: "100%", height: "100%" }}>
          <MainGrid
            rowHeight={rowHeight}
            modifiedRow={modifiedRow}
            modifiedColumns={modifiedColumns}
          />
        </div>
      </ColumnContextsProvider>
    </RowContextsProvider>
  );
}

export default React.memo(ReactDataGrid);
