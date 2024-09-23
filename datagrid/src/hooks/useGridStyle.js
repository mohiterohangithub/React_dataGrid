import { useEffect, useMemo, useState } from "react";

const useGridStyle = ({ columns, modifiedRow, rowHeight }) => {
  const [style, setStyle] = useState({
    gridTemplateColumns: "",
    gridTemplateRows: "",
    height: "",
    width: "",
  });

  const getColumnStyle = (column) => {
    let columnsStyle = "";
    let width = 0;
    column.forEach((element) => {
      if (element?.width) {
        columnsStyle = columnsStyle + ` ${Number(element.width)}px`;
        width = width + Number(element.width);
      } else {
        columnsStyle = columnsStyle + ` 80px`;
        width = width + 80;
      }
    });
    return {
      columnsStyle: columnsStyle.trim(),
      width,
    };
  };

  const gridHeigh = (modifiedRow, rowHeight) => {
    return `${Number(modifiedRow?.length) * Number(rowHeight)}px`;
  };

  useEffect(() => {
    let { columnsStyle, width } = getColumnStyle(columns);
    let rowStyle = `repeat(${modifiedRow?.length},${rowHeight}px)`;
    let height = gridHeigh(modifiedRow, rowHeight);
    setStyle({
      gridTemplateColumns: columnsStyle,
      gridTemplateRows: rowStyle,
      height,
      width,
    });
  }, [columns, modifiedRow]);

  const Style = useMemo(() => {
    return style;
  }, [style]);

  return Style;
};

export default useGridStyle;
