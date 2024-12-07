import React from "react";
import s from "./headercell.module.scss";
import useHeaderCellStyle from "../../hooks/useHeaderCellStyle";

function HeaderCell({ header, index }) {
  const headerCellStyle = useHeaderCellStyle({ header, index });

  return (
    <div
      key={header.name}
      style={{ ...headerCellStyle }}
      className={s.headercell}
    >
      {header.name}
    </div>
  );
}

export default HeaderCell;
