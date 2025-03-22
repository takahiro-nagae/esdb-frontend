export const isDisplayCell = (cellId: string, isDispVal: boolean) => {
  if (isDispVal) {
    // trueの場合は全てのcellを表示して良い
    return true;
  }

  if (cellId === 'value') {
    // isDispValがfalseの場合はvalueのcellは表示しない
    return false;
  } else {
    return true;
  }
};
