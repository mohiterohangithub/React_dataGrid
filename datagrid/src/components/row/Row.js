import React from "react";
import Cell from "../cell/Cell";

function Row({ cell, columns }) {
  const rowNumber = cell.rowID;
  return (
    <>
      {Object.entries(cell)
        .filter(([key, value]) => key !== "rowID")
        .map((cellData, index) => (
          <Cell
            cellData={cellData}
            rowNumber={rowNumber}
            index={index}
            columns={columns}
          />
        ))}
    </>
  );
}
export default Row;
