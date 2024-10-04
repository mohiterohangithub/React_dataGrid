import React, { useContext } from "react";
import { ColumnContexts } from "../../globalcontext/ColumnContexts";
import useCellStyle from "../../hooks/useCellStyle";

function Cell(props) {
  const { cellData, rowNumber } = props;
  const { columnsMap } = useContext(ColumnContexts);
  const [key, value] = cellData;
  const { renderEditCell } = columnsMap?.get(key);
  const cellStyle = useCellStyle({ ...props });

  return (
    <div
      style={{ width: "100%", height: "100%", ...cellStyle }}
      key={`${rowNumber}`}
    >
      {renderEditCell ? (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {renderEditCell({
            cellValue: value,
            column: key,
            rowIndex: rowNumber,
          })}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {value}
        </div>
      )}
    </div>
  );
}

export default Cell;
