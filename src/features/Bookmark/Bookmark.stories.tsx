import { Meta, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import { Dummy1, Dummy2 } from '../Search/Pc/data/SearchListMockData';

import { Bookmark } from './Bookmark';

import { useBookmarkState } from '@/state/useBookmarkState';

export default {
  title: 'Bookmark/Bookmark',
  component: Bookmark,
  decorators: [
    (Story, context) => {
      const { setEnchants, removeAllEnchants } = useBookmarkState();
      useEffect(() => {
        if (context.name === 'Default') {
          setEnchants([Dummy1, Dummy2]);
        } else {
          removeAllEnchants();
        }
      }, [context.name]);
      return <Story />;
    },
  ],
} as Meta<typeof Bookmark>;

export const Default: StoryFn<typeof Bookmark> = () => {
  return <Bookmark />;
};

export const Empty: StoryFn<typeof Bookmark> = () => {
  return <Bookmark />;
};
