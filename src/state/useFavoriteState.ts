import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { EnchantData } from '@/repositories/search/_types';

type State = {
  enchants: EnchantData[];
};

type Action = {
  pushEnchant: (enchant: EnchantData) => void;
  removeEnchant: (enchantId: string) => void;
};

export const isFavorite = (enchantId: string) =>
  useStore
    .getState()
    .enchants.find((enchant: EnchantData) => enchant.enchant_id === enchantId);

const useStore = create<State & Action>()(
  persist(
    immer(set => ({
      enchants: [],
      pushEnchant: (enchant: EnchantData) =>
        set((state: State) => {
          !isFavorite(enchant.enchant_id) && state.enchants.push(enchant);
        }),
      removeEnchant: (enchantId: string) =>
        set(state => {
          state.enchants = state.enchants.filter(
            (enchant: EnchantData) => enchant.enchant_id !== enchantId,
          );
        }),
    })),
    { name: 'favoriteEnchants' },
  ),
);

export const useFavoriteState = () => {
  const enchants = useStore(store => store.enchants);
  const pushEnchant = useStore(store => store.pushEnchant);
  const removeEnchant = useStore(store => store.removeEnchant);

  return {
    enchants,
    pushEnchant,
    removeEnchant,
  };
};
