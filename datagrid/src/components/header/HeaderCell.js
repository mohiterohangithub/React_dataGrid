import React from "react";
import s from "./headercell.module.scss";

function HeaderCell({ header }) {
  return <div key={header.name} className={s.headercell}>{header.name}</div>;
}

export default HeaderCell;
