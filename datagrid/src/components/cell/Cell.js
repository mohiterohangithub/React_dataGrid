import React from "react";

function Cell(props) {
  const { cellData, rowNumber, columns, index } = props;
  const [key, value] = cellData;
  return (
    <div
      key={`${value}-${rowNumber}-${index}`}
      style={{
        width: "100%",
        height: "100%",
        gridRow: `${rowNumber}/${rowNumber + 1}`,
        gridColumn: `${index + 1}/${index + 2}`,
      }}
    >
      {value}
    </div>
  );
}

export default Cell;
