import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import * as stories from '../stories/RouteList.stories';
import { omtData, routeNameFor3 } from '../stories/RouteListStoryData';


describe('RouteList', () => {
  it('入手先がない', () => {
    const { NoItems } = composeStories(stories);
    render(<NoItems />);

    // 入手先がない場合は何も表示されない
    routeNameFor3.forEach(str => {
      expect(screen.queryByText(str)).toBeNull();
    });
  });

  it('routeNameが3つ(省略が発生しない場合)', () => {
    const { NotOmtItems } = composeStories(stories);
    render(<NotOmtItems />);

    // 入手先が3つの場合は全て表示される
    routeNameFor3.forEach(str => {
      expect(screen.getByText(str)).toBeTruthy();
    });
  });

  it('routeNameが4つ(省略が発生する場合)', () => {
    const { OmtItems } = composeStories(stories);
    render(<OmtItems />);

    // 入手先が4つの場合は3つまで表示される
    routeNameFor3.forEach(str => {
      expect(screen.getByText(str)).toBeTruthy();
    });
    expect(screen.queryByText(omtData)).toBeNull();
  });
});
