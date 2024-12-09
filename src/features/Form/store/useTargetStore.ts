import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand/react';

import { FormTargetType } from '@/repositories/form/_types';

type State = {
  targets: Array<FormTargetType>;
  selected: string;
};

type Action = {
  setTargets: (targets: Array<FormTargetType>) => void;
  setSelected: (selected: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    targets: [],
    selected: '',
    setTargets: (targets: Array<FormTargetType>) => set({ targets }),
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
