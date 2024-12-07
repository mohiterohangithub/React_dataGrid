import { useLayoutEffect, useState } from "react";

function useMainHeader({ gridTemplateColumns, headerHeight = "45px" }) {
  const [headerGridStyle, setHeaderGridStyle] = useState({
    gridTemplateColumns: "",
    gridTemplateRows: "",
  });

  useLayoutEffect(() => {
    setHeaderGridStyle({
      gridTemplateColumns: gridTemplateColumns,
      gridTemplateRows: `repeat(1,${headerHeight})`,
    });
  }, [gridTemplateColumns]);

  return headerGridStyle;
}

export default useMainHeader;
