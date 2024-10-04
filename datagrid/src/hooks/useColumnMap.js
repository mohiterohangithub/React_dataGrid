import { useMemo } from "react";

function useColumnMap({ columns }) {
  const Maps = useMemo(() => {
    const map = new Map();
    columns?.forEach((element) => {
      map.set(element.key, element);
    });
    return map;
  }, [columns]);
  return Maps;
}

export default useColumnMap;
