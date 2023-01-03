const numberToColumnSheets = (columnNumber: number) => {
  let result = '';
  while (columnNumber > 0) {
    let remainder = (columnNumber - 1) % 26;
    result = String.fromCharCode(remainder + 65) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return result;
};
