import React from "react";
import Cell from "../cell/Cell";
import { useColumnKey } from "../../hooks";
function Row({ cell }) {
  const columnKey = useColumnKey();
  const rowNumber = cell.rowID;
  const modifiedCell = {};
  columnKey?.forEach((key) => {
    modifiedCell[key] = cell[key];
  });
  return (
    <>
      {Object.entries(modifiedCell)
        .filter(([key, value]) => key !== "rowID")
        .map((cellData, index) => (
          <Cell cellData={cellData} rowNumber={rowNumber} index={index} />
        ))}
    </>
  );
}
export default React.memo(Row);
