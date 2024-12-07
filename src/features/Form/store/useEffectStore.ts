import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { FormEffectType } from '@/repositories/form/_types';

type State = {
  effects: Array<FormEffectType>;
  selected: string;
  value: string;
  range: string;
};

type Action = {
  setEffects: (effects: Array<FormEffectType>) => void;
  setSelected: (selected: string) => void;
  setValue: (value: string) => void;
  setRange: (range: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    effects: [],
    selected: '',
    value: '',
    range: '0',
    setEffects: (effects: Array<FormEffectType>) => set({ effects }),
    setSelected: (selected: string) => set({ selected }),
    setValue: (value: string) => set({ value }),
    setRange: (range: string) => set({ range }),
  })),
);

export const useEffectStore = () => {
  const effects = useStore(store => store.effects);
  const selected = useStore(store => store.selected);
  const value = useStore(store => store.value);
  const range = useStore(store => store.range);
  const setEffects = useStore(store => store.setEffects);
  const setSelected = useStore(store => store.setSelected);
  const setValue = useStore(store => store.setValue);
  const setRange = useStore(store => store.setRange);

  return {
    effects,
    selected,
    value,
    range,
    setEffects,
    setSelected,
    setValue,
    setRange,
  };
};
