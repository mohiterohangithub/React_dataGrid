import React, { useRef } from "react";
import gridStyle from "./reactDataGrid.module.scss";
import {
  useGridStyle,
  useModifiedRow,
  useVirtualization,
} from "../../hooks/index";
import Row from "../row/Row";

function ReactDataGrid(props) {
  const { columns, rows, rowHeight = 45 } = props;
  const modifiedRow = useModifiedRow({ rows });
  const GridRef = useRef(null);
  const ChildRef = useRef(null);

  const { cells, handleScroll } = useVirtualization({
    GridRef,
    modifiedRow,
    rowHeight,
  });
  const gridStyleInline = useGridStyle({ columns, modifiedRow, rowHeight });
  return (
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
          <Row cell={value} columns={columns} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(ReactDataGrid);
