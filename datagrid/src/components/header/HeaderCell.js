import React from "react";
import s from "./headercell.module.scss";
import useHeaderCellStyle from "../../hooks/useHeaderCellStyle";
import ResizableHeaderCell from "./ResizableHeaderCell";

function HeaderCell({ header, index }) {
  const headerCellStyle = useHeaderCellStyle({ header, index });

  return (
    <>
      {header?.resizable ? (
        <ResizableHeaderCell header={header} index={index} />
      ) : (
        <div
          key={header.name}
          style={{ ...headerCellStyle }}
          className={s.headercell}
        >
          {header.name}
        </div>
      )}
    </>
  );
}

export default HeaderCell;
