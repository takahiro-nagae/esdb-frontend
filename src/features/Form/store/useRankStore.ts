import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Rank } from '@/generated/graphql';

type State = {
  ranks: Rank[];
  selected: string;
  range: string;
};

type Action = {
  setRanks: (ranks: Rank[]) => void;
  setSelected: (selected: string) => void;
  setRange: (range: string) => void;
};

const useStore = create<State & Action>()(
  immer<State & Action>(set => ({
    ranks: [],
    selected: '',
    range: '1',
    setRanks: (ranks: Rank[]) => set({ ranks }),
    setSelected: (selected: string) => set({ selected }),
    setRange: (range: string) => set({ range }),
  })),
);

export const useRankStore = () => {
  const ranks = useStore(store => store.ranks);
  const selected = useStore(store => store.selected);
  const range = useStore(store => store.range);
  const setRanks = useStore(store => store.setRanks);
  const setSelected = useStore(store => store.setSelected);
  const setRange = useStore(store => store.setRange);

  return { ranks, selected, range, setRanks, setSelected, setRange };
};
