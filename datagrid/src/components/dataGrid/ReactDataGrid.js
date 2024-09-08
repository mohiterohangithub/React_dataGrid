import React, { useRef } from "react";
import gridStyle from "./reactDataGrid.module.scss";

function ReactDataGrid() {
  const GridRef = useRef(null);

  return (
    <div className={gridStyle.gridMainParent} ref={GridRef}>
      ReactDataGrid
    </div>
  );
}

export default ReactDataGrid;
