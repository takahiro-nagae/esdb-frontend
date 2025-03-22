import { HeadData } from '../types/HeadData';

type HeadCell = {
  id: keyof HeadData;
  label: string;
};

/**
 * エンチャント一覧のヘッダーデータ
 */
export const HeadCellData: ReadonlyArray<HeadCell> = [
  {
    id: 'name',
    label: 'エンチャント名',
  },
  {
    id: 'position',
    label: ' 位置',
  },
  {
    id: 'rank',
    label: 'ランク',
  },
  {
    id: 'target',
    label: '対象',
  },
  {
    id: 'value',
    label: '値',
  },
] as const;
