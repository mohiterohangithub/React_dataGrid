Array.prototype.row = function () {
  let array = this;
  let newArray = [];
  for (const obj of array) {
    for (const [key, value] of Object.entries(obj)) {
      newArray.push({ key: key, value: value });
    }
  }

  return newArray;
};
