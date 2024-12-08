export const isDisplayCell = (cellId: string, isDispVal: boolean) => {
  if (isDispVal) {
    // trueの場合は全てのcellを表示して良い
    return true;
  }

  if (cellId === 'disp_val') {
    // isDispValがfalseの場合はdisp_valのcellは表示しない
    return false;
  } else {
    return true;
  }
};
