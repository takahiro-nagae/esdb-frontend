import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand/react';

import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

type State = {
  immutableEnchants: GetEnchantDetailsQuery['details']['enchants'];
  enchants: GetEnchantDetailsQuery['details']['enchants'];
  enchantsLength: number;
  effectName: string;
};

type Action = {
  setImmutableEnchants: (
    immutableEnchants: GetEnchantDetailsQuery['details']['enchants'],
  ) => void;
  setEnchants: (
    enchants: GetEnchantDetailsQuery['details']['enchants'],
  ) => void;
  setEffectName: (effectName: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    immutableEnchants: [],
    enchants: [],
    enchantsLength: 0,
    effectName: '',
    setImmutableEnchants: (
      immutableEnchants: GetEnchantDetailsQuery['details']['enchants'],
    ) =>
      set({
        immutableEnchants,
        enchantsLength: immutableEnchants.length,
        enchants: immutableEnchants,
      }),
    setEnchants: (enchants: GetEnchantDetailsQuery['details']['enchants']) =>
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
