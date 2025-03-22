import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand/react';

export type Enchant = {
  id: string;
  name: string;
  nameEn: string;
  isInvalidTarget: boolean;
  isImp: boolean;
  effects: { name: string; type: string }[];
  position: string;
  positionName: string;
  rank: string;
  rankSeq: number;
  routes: string[];
  target: string;
  value: number | null;
};

type State = {
  immutableEnchants: Enchant[];
  enchants: Enchant[];
  enchantsLength: number;
  effectName: string;
};

type Action = {
  setImmutableEnchants: (immutableEnchants: Enchant[]) => void;
  setEnchants: (enchants: Enchant[]) => void;
  setEffectName: (effectName: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    immutableEnchants: [],
    enchants: [],
    enchantsLength: 0,
    effectName: '',
    setImmutableEnchants: (immutableEnchants: Enchant[]) =>
      set({
        immutableEnchants,
        enchantsLength: immutableEnchants.length,
        enchants: immutableEnchants,
      }),
    setEnchants: (enchants: Enchant[]) =>
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
