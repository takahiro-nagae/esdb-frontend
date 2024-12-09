import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import { SearchResultHead } from '../SearechResultHead';

import { Dummy1 } from '@/features/Search/Pc/data/SearchListMockData';
import { useEnchantStore } from '@/features/Search/state/useEnchantStore';

export default {
  title: 'search/component/SearchResult/SearchResultHead',
  component: SearchResultHead,
  decorators: [
    (Story, context) => {
      const { setImmutableEnchants, setEffectName } = useEnchantStore();
      useEffect(() => {
        switch (context.name) {
          case 'Result None':
            setImmutableEnchants([]);
            setEffectName('');
            break;
          case 'Result Equals Display':
            setImmutableEnchants([Dummy1, Dummy1, Dummy1, Dummy1, Dummy1]);
            setEffectName('');
            break;
          case 'Result Not Equals Display':
            setImmutableEnchants([Dummy1, Dummy1, Dummy1]);
            setEffectName('');
            break;
          case 'Display Effect':
            setImmutableEnchants([Dummy1, Dummy1, Dummy1, Dummy1, Dummy1]);
            setEffectName('最大ダメージ');
            break;
          default:
            break;
        }
      }, [setImmutableEnchants, setEffectName]);

      return <Story />;
    },
  ],
} as Meta<typeof SearchResultHead>;

export const ResultNone: StoryObj<typeof SearchResultHead> = {};

export const ResultEqualsDisplay: StoryObj<typeof SearchResultHead> = {};

export const ResultNotEqualsDisplay: StoryObj<typeof SearchResultHead> = {};

export const DisplayEffect: StoryObj<typeof SearchResultHead> = {};
