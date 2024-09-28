import { useMemo } from "react";

function useModifiedColumns({ columns }) {
  let column = useMemo(() => {
    const frozen = [];
    const nonFrozen = [];
    let rank = -1;
    const incrementRank = () => {
      rank += 1;
      return rank;
    };
    columns?.forEach((col) => {
      Boolean(col.frozen)
        ? frozen.push({ ...col, frozenColumnRank: incrementRank() })
        : nonFrozen.push(col);
    });

    return [...frozen, ...nonFrozen];
  }, [columns]);

  return column;
}

export default useModifiedColumns;
