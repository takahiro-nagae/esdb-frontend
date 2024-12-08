import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { FormRankType } from '@/repositories/form/_types';

type State = {
  ranks: Array<FormRankType>;
  selected: string;
  range: string;
};

type Action = {
  setRanks: (ranks: Array<FormRankType>) => void;
  setSelected: (selected: string) => void;
  setRange: (range: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    ranks: [],
    selected: '',
    range: '1',
    setRanks: (ranks: Array<FormRankType>) => set({ ranks }),
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
