import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { BeginnerData } from '../../../../../../repositories/detail/__mock__/result';
import { Rank } from '../../Rank/Rank';
import * as stories from '../stories/Detail.stories';

vi.mock('../../Rank/Rank');
describe('Detail', () => {
  const { DetailView } = composeStories(stories);

  test('表示内容の確認', async () => {
    render(<DetailView />);
    const enchantData = BeginnerData;
    const rowDates = screen.getAllByRole('row');

    // 名称
    const nameRow = rowDates[0];
    // カラム名が「名称」であること
    expect(nameRow.children[0].textContent).toBe('名称');
    // データのエンチャントの名称が意図した形式で表示されること
    expect(nameRow.children[1].textContent).toBe(
      enchantData.name + enchantData.nameEn,
    );

    // 位置
    const positionRow = rowDates[1];
    // カラム名が「位置」であること
    expect(positionRow.children[0].textContent).toBe('位置');
    // データのエンチャントの位置が意図した形式で表示されること
    expect(positionRow.children[1].textContent).toBe(enchantData.positionName);

    // ランク
    const rankRow = rowDates[2];
    // カラム名が「ランク」であること
    expect(rankRow.children[0].textContent).toBe('ランク');
    // データのエンチャントのランクが意図した形式で表示されること
    expect(rankRow.children[1].textContent).toBe(enchantData.rank);
    // ランクのモーダルが開くことの確認
    expect(Rank).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(Rank).toHaveBeenCalledTimes(1);
    });

    // 効果
    const effectRow = rowDates[3];
    // カラム名が「効果」であること
    expect(effectRow.children[0].textContent).toBe('効果');
    // データのエンチャントの効果が意図した形式で表示されること
    expect(effectRow.children[1].textContent).toBe(
      enchantData.effects.map(effect => effect?.name).join(''),
    );

    // 入手先
    const routeRow = rowDates[4];
    // カラム名が「入手先」であること
    expect(routeRow.children[0].textContent).toBe('入手先');
    // データのエンチャントの入手先が意図した形式で表示されること
    expect(routeRow.children[1].textContent).toBe(
      enchantData.routes.map(route => route?.replaceAll('<br>', '')).join(''),
    );
  });
});
