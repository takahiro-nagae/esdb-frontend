import { HeadData } from "../type/HeadData";

interface HeadCell {
    id: keyof HeadData;
    label: string;
}

/**
 * エンチャント一覧のヘッダーデータ
 */
export const HeadCellData: Array<HeadCell> = [
    {
        id: 'enchant_name',
        label: 'エンチャント名',
    },
    {
        id: 'position_id',
        label: ' 位置',
    },
    {
        id: 'rank',
        label: 'ランク',
    },
    {
        id: 'target_name',
        label: '対象',
    },
    {
        id: 'disp_val',
        label: '値',
    },
];