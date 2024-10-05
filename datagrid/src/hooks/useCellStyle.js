import { useContext } from "react";
import { ColumnContexts } from "../globalcontext/ColumnContexts";

function useCellStyle({ cellData, rowNumber, index }) {
  const { columns } = useContext(ColumnContexts);
  const [key, ] = cellData;
  const specificColumn = columns?.find((val) => val.key === key);
  const getInsetInlineStart = () => {
    let width = 0;
    let index = columns.findIndex((val) => val.key === key);
    while (index) {
      Boolean(columns[index - 1]?.width)
        ? (width = width + columns[index - 1]["width"])
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
