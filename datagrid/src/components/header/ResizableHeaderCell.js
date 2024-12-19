import React, { useRef, useContext, useEffect } from "react";
import { ColumnContexts } from "../../globalcontext/ColumnContexts";
import s from "./headercell.module.scss";
import useHeaderCellStyle from "../../hooks/useHeaderCellStyle";
import useResizeHeader from "../../hooks/useResizeHeader";

function ResizableHeaderCell({ header, index }) {
  const headerCellStyle = useHeaderCellStyle({ header, index });
  const ParentREF = useRef(null);
  const ChildREF = useRef(null);
  const { modifiedColumns, setModifiedColumns } = useContext(ColumnContexts);
  const { width, columnName } = useResizeHeader(ChildREF, ParentREF);

  useEffect(() => {
    const nowModifiedColumns = modifiedColumns.map((obj) => {
      if (obj.key === columnName) {
        return { ...obj, width: width };
      } else {
        return obj;
      }
    });
    setModifiedColumns(nowModifiedColumns);
  }, [width, columnName]);

  return (
    <div
      data-columnname={header.key}
      ref={ParentREF}
      style={{ ...headerCellStyle }}
      className={s.resizable}
    >
      <div className={s.headercell}>{header.name}</div>
      <div ref={ChildREF} className={s.resizer}></div>
    </div>
  );
}

export default ResizableHeaderCell;
