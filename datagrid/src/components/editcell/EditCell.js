import React, { useContext, useEffect, useState } from "react";
import { RowContexts } from "../../globalcontext/RowContexts";

const EditCell = ({ val, rowNumber, KEY }) => {
  const [value, setValue] = useState(val);
  const { rows, onRowChange } = useContext(RowContexts);
  useEffect(() => {
    setValue(val);
  }, [val]);

  const handleBlur = ({ KEY, rowNumber, value }) => {
    const rowsCopy = rows;
    rowsCopy[rowNumber - 1][KEY] = value;
    onRowChange([...rowsCopy]);
  };

  return (
    <input
      style={{ width: "90%", height: "80%" }}
      onBlur={() => handleBlur({ KEY, rowNumber, value })}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default EditCell;
