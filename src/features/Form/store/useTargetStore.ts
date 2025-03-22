import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand/react';

import { Target } from '@/repositories/generated/graphql';

type State = {
  targets: Target[];
  selected: string;
};

type Action = {
  setTargets: (targets: Target[]) => void;
  setSelected: (selected: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    targets: [],
    selected: '',
    setTargets: (targets: Target[]) => set({ targets }),
    setSelected: (selected: string) => set({ selected }),
  })),
);

export const useTargetStore = () => {
  const targets = useStore(store => store.targets);
  const selected = useStore(store => store.selected);
  const setTargets = useStore(store => store.setTargets);
  const setSelected = useStore(store => store.setSelected);

  return { targets, selected, setTargets, setSelected };
};
