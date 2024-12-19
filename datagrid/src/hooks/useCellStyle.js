import { useContext } from "react";
import { ColumnContexts } from "../globalcontext/ColumnContexts";

function useCellStyle({ cellData, rowNumber, index }) {
  const { modifiedColumns } = useContext(ColumnContexts);
  const [key, ] = cellData;
  const specificColumn = modifiedColumns?.find((val) => val.key === key);
  const getInsetInlineStart = () => {
    let width = 0;
    let index = modifiedColumns.findIndex((val) => val.key === key);
    while (index) {
      Boolean(modifiedColumns[index - 1]?.width)
        ? (width = width + modifiedColumns[index - 1]["width"])
        : (width = width + 80);
      index--;
    }
    return `${width}px`;
  };

  if (Boolean(specificColumn?.frozen)) {
    return {
      insetInlineStart: getInsetInlineStart(),
      position: "sticky",
      zIndex: 5,
      gridRow: `${rowNumber}/${rowNumber + 1}`,
      gridColumn: `${index + 1}/${index + 2}`,
    };
  } else {
    return {
      gridRow: `${rowNumber}/${rowNumber + 1}`,
      gridColumn: `${index + 1}/${index + 2}`,
    };
  }
}

export default useCellStyle;
