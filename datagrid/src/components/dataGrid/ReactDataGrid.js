import React from "react";
import { useColumnMap, useModifiedRow } from "../../hooks/index";
import ColumnContextsProvider from "../../globalcontext/ColumnContexts";
import RowContextsProvider from "../../globalcontext/RowContexts";
import useModifiedColumns from "../../hooks/useModifiedColumns";
import MainGrid from "./MainGrid";
import MainHeader from "../header/MainHeader";

function ReactDataGrid(props) {
  const { columns, rows, rowHeight = 45, onRowChange } = props;
  const modifiedRow = useModifiedRow({ rows });
  const modifiedColumns = useModifiedColumns({ columns });
  const columnsMap = useColumnMap({ columns });

  return (
    <RowContextsProvider rows={modifiedRow} onRowChange={onRowChange}>
      <ColumnContextsProvider columns={modifiedColumns} columnsMap={columnsMap}>
        <div style={{ width: "100%", height: "100%" }}>
          <MainHeader rowHeight={rowHeight} modifiedRow={modifiedRow} />
          <MainGrid rowHeight={rowHeight} />
        </div>
      </ColumnContextsProvider>
    </RowContextsProvider>
  );
}

export default React.memo(ReactDataGrid);
