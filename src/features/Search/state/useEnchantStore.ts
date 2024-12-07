import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand/react';

import { EnchantData } from '@/repositories/search/_types';

type State = {
  immutableEnchants: EnchantData[];
  enchants: EnchantData[];
  enchantsLength: number;
  effectName: string;
};

type Action = {
  setImmutableEnchants: (immutableEnchants: EnchantData[]) => void;
  setEnchants: (enchants: EnchantData[]) => void;
  setEffectName: (effectName: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    immutableEnchants: [],
    enchants: [],
    enchantsLength: 0,
    effectName: '',
    setImmutableEnchants: (immutableEnchants: EnchantData[]) =>
      set({
        immutableEnchants,
        enchantsLength: immutableEnchants.length,
        enchants: immutableEnchants,
      }),
    setEnchants: (enchants: EnchantData[]) =>
      set({ enchants, enchantsLength: enchants.length }),
    setEffectName: (effectName: string) => set({ effectName }),
  })),
);

export const useEnchantStore = () => {
  const immutableEnchants = useStore(store => store.immutableEnchants);
  const enchants = useStore(store => store.enchants);
  const enchantsLength = useStore(store => store.enchantsLength);
  const effectName = useStore(store => store.effectName);
  const setImmutableEnchants = useStore(store => store.setImmutableEnchants);
  const setEnchants = useStore(store => store.setEnchants);
  const setEffectName = useStore(store => store.setEffectName);

  return {
    immutableEnchants,
    enchants,
    enchantsLength,
    effectName,
    setImmutableEnchants,
    setEnchants,
    setEffectName,
  };
};
