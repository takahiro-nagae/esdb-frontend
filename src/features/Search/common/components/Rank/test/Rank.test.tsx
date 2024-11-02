import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Rank } from '../Rank';

describe('Rank', () => {
  it('表示確認', async () => {
    render(<Rank rank={'F'} />);

    // ランクの表示が想定通りか
    expect(screen.getByTestId('rank-prefix').textContent).toBe('ランク：');
    await waitFor(() => {
      expect(screen.getByTestId('rank').textContent).toBe('F');
    });

    // 単位の表示が想定通りか
    expect(screen.getByTestId('rank-unit').textContent).toBe(
      'INT:200時 単位：%',
    );

    const rows = screen.getAllByRole('row');

    // テーブルのヘッダーが想定通りか
    const tableHeader = rows[0];
    expect(tableHeader.children[0].textContent).toBe('曜日');
    expect(tableHeader.children[1].textContent).toBe('通常');
    expect(tableHeader.children[2].textContent).toBe('エリート');
    expect(tableHeader.children[3].textContent).toBe('エルフ');
    expect(tableHeader.children[4].textContent).toBe('古代');
    expect(tableHeader.children[5].textContent).toBe('稀代');

    // 木曜日以外のデータが想定通りか
    const nomalData = rows[1];
    expect(nomalData.children[0].textContent).toBe('木曜日以外');
    expect(nomalData.children[1].textContent).toBe('1');
    expect(nomalData.children[2].textContent).toBe('2');
    expect(nomalData.children[3].textContent).toBe('3');
    expect(nomalData.children[4].textContent).toBe('4');
    expect(nomalData.children[5].textContent).toBe('5');

    // 木曜日のデータが想定通りか
    const thursdayData = rows[2];
    expect(thursdayData.children[0].textContent).toBe('木曜日');
    expect(thursdayData.children[1].textContent).toBe('6');
    expect(thursdayData.children[2].textContent).toBe('7');
    expect(thursdayData.children[3].textContent).toBe('8');
    expect(thursdayData.children[4].textContent).toBe('9');
    expect(thursdayData.children[5].textContent).toBe('10');
  });
});
