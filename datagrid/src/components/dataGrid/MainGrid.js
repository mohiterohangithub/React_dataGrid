import React, { useRef, useContext } from "react";
import { ColumnContexts } from "../../globalcontext/ColumnContexts";
import gridStyle from "./reactDataGrid.module.scss";
import { useGridStyle, useVirtualization } from "../../hooks";
import Row from "../row/Row";

function MainGrid({ rowHeight, modifiedRow }) {
  const GridRef = useRef(null);
  const ChildRef = useRef(null);
  const { modifiedColumns } = useContext(ColumnContexts);
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
    <div
      id="reactDataGridMainComponent"
      className={gridStyle.gridMainParent}
      onScroll={handleScroll}
      ref={GridRef}
    >
      <div
        style={{ ...gridStyleInline }}
        className={gridStyle.mainGrid}
        ref={ChildRef}
      >
        {cells?.map((value, index) => (
          <Row key={value.rowID} cell={value} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(MainGrid);
