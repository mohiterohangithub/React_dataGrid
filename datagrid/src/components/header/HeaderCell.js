import React from "react";
import s from "./headercell.module.scss";
import useHeaderCellStyle from "../../hooks/useHeaderCellStyle";
import ResizableHeaderCell from "./ResizableHeaderCell";
import { IconCaretDown } from "../../assets/icons/index";

function HeaderCell({ header, index, sort }) {
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
          <p>{header.name}</p>
          <div className={s.icon} onClick={() => sort(header.key)}>
            <IconCaretDown />
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderCell;
