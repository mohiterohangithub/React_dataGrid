import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { RowContexts } from "../globalcontext/RowContexts";
import { ColumnContexts } from "../globalcontext/ColumnContexts";

function useSort() {
  const [columnName, setColumnName] = useState({ name: null });
  const { defaultRows, setRows } = useContext(RowContexts);
  const { modifiedColumns, setModifiedColumns } = useContext(ColumnContexts);

  const sortingOrder = useRef(["ascending", "descending", "default"]);
  const sortedColumn = useRef({
    columnName: null,
    sortingOrder: null,
  });

  useLayoutEffect(() => {
    if (columnName?.name !== null) {
      if (columnName?.name === sortedColumn.current?.columnName) {
        let findIndex = sortingOrder.current.indexOf(
          sortedColumn.current.sortingOrder
        );
        if (sortingOrder.current.length === findIndex + 1) {
          findIndex = 0;
        } else {
          findIndex = findIndex + 1;
        }
        const order = sortingOrder.current[findIndex];
        sortedColumn.current = {
          columnName: columnName?.name,
          sortingOrder: order,
        };
      } else {
        sortedColumn.current = {
          columnName: columnName?.name,
          sortingOrder: sortingOrder.current[0],
        };
      }
    }
  }, [columnName]);

  useEffect(() => {
    if (
      (Array.isArray(defaultRows) && sortedColumn?.current?.columnName,
      sortedColumn?.current?.sortingOrder)
    ) {
      const sortedArray = mergeSort(
        defaultRows,
        sortedColumn?.current?.columnName,
        sortedColumn?.current?.sortingOrder
      );
      let count = 1;
      const rowArray = [];
      for (const obj of sortedArray) {
        rowArray.push({ ...obj, rowID: count });
        count++;
      }
      const columns = modifiedColumns.map((obj) => {
        if (obj.key === sortedColumn?.current?.columnName) {
          return {
            ...obj,
            sorting: {
              order: sortedColumn?.current?.sortingOrder,
            },
          };
        } else {
          if (obj.hasOwnProperty("sorting")) {
            delete obj.sorting;
            return obj;
          }
          return obj;
        }
      });
      setModifiedColumns(columns);
      setRows(rowArray);
    }
  }, [columnName]);

  return (name) => {
    if (name) {
      setColumnName({ name: name });
    }
  };
}

function mergeSort(arr, key, order) {
  if (arr.length <= 1) {
    return arr; // Base case: array with 0 or 1 element is already sorted
  }

  if (order === "default") {
    return arr;
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort both halves and merge them
  return merge(
    mergeSort(left, key, order),
    mergeSort(right, key, order),
    key,
    order
  );
}

function merge(left, right, key, order) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both halves and push the smallest one
  while (leftIndex < left.length && rightIndex < right.length) {
    if (
      left[leftIndex][key] < right[rightIndex][key] &&
      order === "ascending"
    ) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else if (
      left[leftIndex][key] > right[rightIndex][key] &&
      order === "descending"
    ) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left or right array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export default useSort;
