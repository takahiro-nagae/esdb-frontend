/**
 * 位置コードの値で名称を取得する
 * @param positionCode 位置コード
 * @returns 位置コードの名称 { SerializedStyles }
 */
export function positionName(positionCode: string) {
  switch (positionCode) {
    case '1':
      // 接頭
      return '接頭(prefix)';
    case '2':
      // 接尾
      return '接尾(suffix)';
    default:
      return '';
  }
}
