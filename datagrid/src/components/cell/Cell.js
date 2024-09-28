import React, { useContext } from "react";
import { ColumnContexts } from "../../globalcontext/ColumnContexts";
import useCellStyle from "../../hooks/useCellStyle";

function Cell(props) {
  const { cellData, rowNumber, index } = props;
  const [key, value] = cellData;

  const cellStyle = useCellStyle({ ...props });

  return (
    <div
      key={`${rowNumber}`}
      style={{
        width: "100%",
        height: "100%",
        ...cellStyle,
      }}
    >
      {value}
    </div>
  );
}

export default Cell;
