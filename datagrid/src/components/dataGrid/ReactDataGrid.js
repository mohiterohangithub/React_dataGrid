import React, { useRef } from "react";
import gridStyle from "./reactDataGrid.module.scss";

function ReactDataGrid() {
  const GridRef = useRef(null);

  return (
    <div className={gridStyle.gridMainParent} ref={GridRef}>
      <div className={gridStyle.mainGrid}></div>
    </div>
  );
}

export default ReactDataGrid;
