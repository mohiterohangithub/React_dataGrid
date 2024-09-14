import React, { useRef } from "react";
import gridStyle from "./reactDataGrid.module.scss";
import Row from "../../utils/Row";
import { useGridStyle, useVirtualization } from "../../hooks/index";

function ReactDataGrid(props) {
  const { columns, rows, rowHeight = 45 } = props;

  const GridRef = useRef(null);
  const ChildRef = useRef(null)

  const { top, bottom } = useVirtualization({
    GridRef,
    ChildRef,
    rows,
    rowHeight,
  });
  const gridStyleInline = useGridStyle({ columns, rows, rowHeight });
  return (
    <div className={gridStyle.gridMainParent} ref={GridRef}>
      <div
        style={{ ...gridStyleInline }}
        className={gridStyle.mainGrid}
        ref={ChildRef}
      >
        {rows.slice(top, bottom).row().map(({key, value}, index) => (
          <div key={`${value}-${index}`} >{value}</div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(ReactDataGrid);
