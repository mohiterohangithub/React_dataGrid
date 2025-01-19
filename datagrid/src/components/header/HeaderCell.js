import React, { useRef } from "react";
import s from "./headercell.module.scss";
import useHeaderCellStyle from "../../hooks/useHeaderCellStyle";
import ResizableHeaderCell from "./ResizableHeaderCell";
import { IconCaretDown } from "../../assets/icons/index";

function HeaderCell({ header, index, sort }) {
  const headerCellStyle = useHeaderCellStyle({ header, index });
  const sortingSVGAngel = useRef([
    {
      order: "ascending",
      angle: "0deg",
    },
    {
      order: "descending",
      angle: "180deg",
    },
    {
      order: "default",
      angle: "0deg",
    },
  ]);
  const getStyle = (header) => {
    if (header?.sorting) {
      let angle = "";
      for (let x of sortingSVGAngel.current) {
        if (header.sorting.order === x.order) {
          angle = x.angle;
          break;
        }
      }
      return { transform: `rotate(${angle})` };
    }
    return null;
  };
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
          <div
            style={getStyle(header)}
            className={s.icon}
            onClick={() => sort(header.key)}
          >
            <IconCaretDown />
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderCell;
