import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/EnchantCard.stories';
import {
  createEnchantName,
  createEnchantNameEn,
} from '../../../../common/functions/enchantNameFunction';
import { positionName } from '../../../../common/functions/positionFunction';
import { DetailTable } from '../component/DetailTable/DetailTable';
import { ENCHANT_DATA_MOCK } from '@/repositories/search/__mocks__/fetchSearchEnchantData';

jest.mock('../component/DetailTable/DetailTable');
describe('EnchantCard', () => {
  const { Normal, AllView } = composeStories(stories);

  const enchantNameId = 'enchantName';
  const enchantNameEnId = 'enchantNameEn';
  const impText = '未実装';
  const invalidText = '貼付不可';
  const positionTestId = 'position';
  const dispValId = 'dispVal';
  const KeyboardArrowDownIcon = 'KeyboardArrowDownIcon';
  const KeyboardArrowUpIcon = 'KeyboardArrowUpIcon';

  test('カードの通常表示の確認', async () => {
    render(<Normal />);

    // エンチャント名の確認
    expect(screen.getByTestId(enchantNameId).textContent).toBe(
      createEnchantName(
        ENCHANT_DATA_MOCK.enchant_name,
        ENCHANT_DATA_MOCK.enchant_name_2,
      ),
    );
    // エンチャント英名の確認
    expect(screen.getByTestId(enchantNameEnId).textContent).toBe(
      createEnchantNameEn(
        ENCHANT_DATA_MOCK.enchant_name_en,
        ENCHANT_DATA_MOCK.position_id,
      ),
    );
    // 位置の確認
    expect(screen.getByTestId(positionTestId).textContent).toBe(
      positionName(ENCHANT_DATA_MOCK.position_id),
    );
    // TODO: ランクの確認できるようにしたい
    // TODO: ランクのクリックをして、モーダルが表示されるか確認したい

    // 未実装が表示されていないことを確認
    expect(screen.queryByText(impText)).toBeNull();
    // 貼付不可が表示されていないことを確認
    expect(screen.queryByText(invalidText)).toBeNull();
    // 値が表示されていないことを確認
    expect(screen.queryByTestId(dispValId)).toBeNull();

    // アコーディオンが開いていないことを確認
    const downBottun = screen.getByTestId(KeyboardArrowDownIcon);
    expect(downBottun).toBeInTheDocument();
    expect(screen.queryByTestId(KeyboardArrowUpIcon)).toBeNull();

    // 詳細テーブルはアコーディオンを開く前に一度レンダリングされる
    expect(DetailTable).toHaveBeenCalledTimes(1);
    // アコーディオンを開く
    userEvent.click(downBottun);

    await waitFor(() => {
      // アコーディオンが開いていることを確認
      expect(screen.getByTestId(KeyboardArrowUpIcon)).toBeInTheDocument();
      expect(screen.queryByTestId(KeyboardArrowDownIcon)).toBeNull();
      // 詳細テーブルが再レンダリングされることを確認
      expect(DetailTable).toHaveBeenCalledTimes(2);
    });

    // アコーディオンを閉じる
    userEvent.click(screen.getByTestId(KeyboardArrowUpIcon));

    await waitFor(() => {
      // アコーディオンを閉じた時の確認
      expect(screen.getByTestId(KeyboardArrowDownIcon)).toBeInTheDocument();
      expect(screen.queryByTestId(KeyboardArrowUpIcon)).toBeNull();

      // 詳細テーブルが再レンダリングされることを確認
      expect(DetailTable).toHaveBeenCalledTimes(3);
    });
  });

  test('カードの全表示の確認', () => {
    render(<AllView />);

    // 貼付不可が表示されていることの確認
    expect(screen.getByText(invalidText)).toBeInTheDocument();
    // 未実装が表示されていることの確認
    expect(screen.getByText(impText)).toBeInTheDocument();
    // 値が表示されていることの確認
    expect(screen.getByTestId(dispValId).textContent).toBe('100');
  });
});
