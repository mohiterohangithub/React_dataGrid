import React, { useRef } from "react";
import gridStyle from "./reactDataGrid.module.scss";
import {
  useGridStyle,
  useModifiedRow,
  useVirtualization,
} from "../../hooks/index";
import Row from "../row/Row";
import ColumnContextsProvider from "../../globalcontext/ColumnContexts";
import RowContextsProvider from "../../globalcontext/RowContexts";
import useModifiedColumns from "../../hooks/useModifiedColumns";

function ReactDataGrid(props) {
  const { columns, rows, rowHeight = 45 } = props;
  const modifiedRow = useModifiedRow({ rows });
  const modifiedColumns = useModifiedColumns({ columns });
  const GridRef = useRef(null);
  const ChildRef = useRef(null);

  const { cells, handleScroll } = useVirtualization({
    GridRef,
    modifiedRow,
    rowHeight,
  });
  const gridStyleInline = useGridStyle({
    columns: modifiedColumns,
    modifiedRow,
    rowHeight,
  });
  return (
    <RowContextsProvider rows={modifiedRow}>
      <ColumnContextsProvider columns={modifiedColumns}>
        <div
          className={gridStyle.gridMainParent}
          onScroll={handleScroll}
          ref={GridRef}
        >
          <div
            style={{ ...gridStyleInline }}
            className={gridStyle.mainGrid}
            ref={ChildRef}
          >
            {cells?.map((value) => (
              <Row cell={value} />
            ))}
          </div>
        </div>
      </ColumnContextsProvider>
    </RowContextsProvider>
  );
}

export default React.memo(ReactDataGrid);
