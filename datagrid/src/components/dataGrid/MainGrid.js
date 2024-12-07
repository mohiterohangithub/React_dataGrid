import React, { useRef } from "react";
import gridStyle from "./reactDataGrid.module.scss";
import { useGridStyle, useVirtualization } from "../../hooks";
import Row from "../row/Row";

function MainGrid({ rowHeight, modifiedRow, modifiedColumns }) {
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
