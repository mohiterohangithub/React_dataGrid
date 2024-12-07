import { useContext } from "react";
import { ColumnContexts } from "../globalcontext/ColumnContexts";

function useHeaderCellStyle({ header, index }) {
  const { columns } = useContext(ColumnContexts);
  const getInsetInlineStart = () => {
    let width = 0;
    let index = columns.findIndex((val) => val.key === header.key);
    while (index) {
      Boolean(columns[index - 1]?.width)
        ? (width = width + columns[index - 1]["width"])
        : (width = width + 80);
      index--;
    }
    return `${width}px`;
  };

  if (Boolean(header?.frozen)) {
    return {
      insetInlineStart: getInsetInlineStart(),
      position: "sticky",
      zIndex: 5,
      gridRow: 1,
      gridColumn: `${index + 1}/${index + 2}`,
    };
  } else {
    return {
      gridRow: 1,
      gridColumn: `${index + 1}/${index + 2}`,
    };
  }
}

export default useHeaderCellStyle;
