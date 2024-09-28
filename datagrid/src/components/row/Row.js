import React from "react";
import Cell from "../cell/Cell";
function Row({ cell }) {
  const rowNumber = cell.rowID;

  return (
    <>
      {Object.entries(cell)
        .filter(([key, value]) => key !== "rowID")
        .map((cellData, index) => (
          <Cell cellData={cellData} rowNumber={rowNumber} index={index} />
        ))}
    </>
  );
}
export default React.memo(Row);
