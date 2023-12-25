import { composeStories } from "@storybook/react";
import * as stories from "../stories/Detail.stories";
import { render, screen } from "@testing-library/react";
import { BeginnerData } from "../mock/DetailMockData";
import { createEnchantName, createEnchantNameEn } from "../../../function/enchantNameFunction";

describe('Detail', () => {

    const { DetailView } = composeStories(stories);

    test('表示内容の確認', () => {
        render(<DetailView />);
        const enchantData = BeginnerData;
        const rowDatas = screen.getAllByRole('row');

        // 名称
        const nameRow = rowDatas[0];
        // カラム名が「名称」であること
        expect(nameRow.children[0].textContent).toBe('名称');
        // データのエンチャントの名称が意図した形式で表示されること
        expect(nameRow.children[1].textContent).toBe(createEnchantName(enchantData.enchant_name, enchantData.enchant_name_2) + createEnchantNameEn(enchantData.enchant_name_en, enchantData.position_id));

        // 位置
        const positionRow = rowDatas[1];
        // カラム名が「位置」であること
        expect(positionRow.children[0].textContent).toBe('位置');
        // データのエンチャントの位置が意図した形式で表示されること
        expect(positionRow.children[1].textContent).toBe(enchantData.position);

        // ランク
        const rankRow = rowDatas[2];
        // カラム名が「ランク」であること
        expect(rankRow.children[0].textContent).toBe('ランク');
        // データのエンチャントのランクが意図した形式で表示されること
        expect(rankRow.children[1].textContent).toBe(enchantData.rank);
        // TODO: ランクのモーダルが開くことの確認

        // 効果
        const effectRow = rowDatas[3];
        // カラム名が「効果」であること
        expect(effectRow.children[0].textContent).toBe('効果');
        // データのエンチャントの効果が意図した形式で表示されること
        expect(effectRow.children[1].textContent).toBe(enchantData.effect_name.replaceAll('@', ''));

        // 入手先
        const routeRow = rowDatas[4];
        // カラム名が「入手先」であること
        expect(routeRow.children[0].textContent).toBe('入手先');
        // データのエンチャントの入手先が意図した形式で表示されること
        expect(routeRow.children[1].textContent).toBe(enchantData.route_name.replaceAll('@', '').replaceAll('<br>', ''));
    });
});