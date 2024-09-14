import { useEffect, useState } from "react";

const useGridStyle = ({ columns, rows, rowHeight }) => {
  const [style, setStyle] = useState({
    gridTemplateColumns: "",
    gridTemplateRows: "",
  });

  const getColumnStyle = (column) => {
    let style = "";
    column.forEach((element) => {
      if (element?.width) {
        style = style + ` ${Number(element.width)}px`;
      } else {
        style = style + ` 80px`;
      }
    });
    return style.trim();
  };

  useEffect(() => {
    let columnsStyle = getColumnStyle(columns);
    let rowStyle = `repeat(${rows.length},${rowHeight}px)`;
    setStyle({
      gridTemplateColumns: columnsStyle,
      gridTemplateRows: rowStyle,
    });
  }, [columns, rows]);

  return style;
};

export default useGridStyle;
