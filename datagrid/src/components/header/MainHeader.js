import React, { useRef, useMemo, useEffect } from "react";
import { useGridStyle, useThrottle } from "../../hooks";
import s from "./mainHeader.module.scss";
import HeaderCell from "./HeaderCell";
import useMainHeader from "../../hooks/useMainHeader";

function Header({ rowHeight, modifiedRow, modifiedColumns }) {
  const ParentHeaderREF = useRef(null);

  const { gridTemplateColumns } = useGridStyle({
    columns: modifiedColumns,
    modifiedRow,
    rowHeight,
  });

  const grid = useMemo(() => {
    return document.getElementById("reactDataGridMainComponent");
  }, [document.getElementById("reactDataGridMainComponent")]);

  const scrollGridFunc = useThrottle((element) => {
    if (ParentHeaderREF.current) {
      ParentHeaderREF.current.scrollLeft = element.target?.scrollLeft;
    }
  });

  useEffect(() => {
    if (grid) {
      grid.addEventListener("scroll", scrollGridFunc);
    }
  }, [grid]);

  const headerGridStyle = useMainHeader({ gridTemplateColumns });

  return (
    <div
      ref={ParentHeaderREF}
      className={s.mainheader}
      style={{
        gridTemplateColumns: headerGridStyle.gridTemplateColumns,
        gridTemplateRows: headerGridStyle.gridTemplateRows,
      }}
    >
      {modifiedColumns.map((value, index) => (
        <HeaderCell key={`${value}-${index}`} header={value} index={index} />
      ))}
    </div>
  );
}

export default React.memo(Header);
