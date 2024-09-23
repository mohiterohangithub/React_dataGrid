Array.prototype.row = function ({ columns }) {
  const array = this;
  const columnsKeyIndex = [];
  for (const obj of columns) {
    columnsKeyIndex.push(obj.key);
  }
  let newArray = [];
  for (const obj of array) {
    const { rowID } = obj;
    for (const [key, value] of Object.entries(obj)) {
      let columnIndex = columnsKeyIndex.indexOf(key) + 1;
      if (columnIndex !== 0) {
        newArray.push({
          key: key,
          value: value,
          rowID: Number(rowID),
          columnIndex: Number(columnIndex),
        });
      }
    }
  }
  console.log('newArray',newArray );
  return newArray;
};
