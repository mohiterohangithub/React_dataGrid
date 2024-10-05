import React, { useContext } from "react";
import { ColumnContexts } from "../../globalcontext/ColumnContexts";
import useCellStyle from "../../hooks/useCellStyle";
import EditCell from "../editcell/EditCell";

function Cell(props) {
  const { cellData, rowNumber } = props;
  const { columnsMap } = useContext(ColumnContexts);
  const [key, value] = cellData;
  const { renderEditCell, cellRenderer } = columnsMap?.get(key);
  const cellStyle = useCellStyle({ ...props });
  return (
    <div
      style={{ width: "100%", height: "100%", ...cellStyle }}
      key={`${rowNumber}`}
    >
      {renderEditCell || cellRenderer ? (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {(cellRenderer &&
            cellRenderer({
              cellValue: value,
              column: key,
              rowIndex: rowNumber,
            })) ||
            (renderEditCell && (
              <EditCell KEY={key} val={value} rowNumber={rowNumber} />
            ))}
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
