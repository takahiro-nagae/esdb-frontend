import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { EnchantData } from '@/repositories/search/_types';

type State = {
  enchants: EnchantData[];
};

type Action = {
  setEnchants: (enchants: EnchantData[]) => void;
  pushEnchant: (enchant: EnchantData) => void;
  removeEnchant: (enchantId: string) => void;
  removeAllEnchants: () => void;
};

export const isFavorite = (enchantId: string) =>
  useStore
    .getState()
    .enchants.find((enchant: EnchantData) => enchant.enchant_id === enchantId);

const useStore = create<State & Action>()(
  persist(
    immer(set => ({
      enchants: [],
      setEnchants: (enchants: EnchantData[]) =>
        set((state: State) => {
          state.enchants = enchants.map(enchant => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { disp_val, ...rest } = enchant;
            return rest;
          });
        }),
      pushEnchant: (enchant: EnchantData) =>
        set((state: State) => {
          if (!isFavorite(enchant.enchant_id)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { disp_val, ...rest } = enchant;
            state.enchants.push(rest);
          }
        }),
      removeEnchant: (enchantId: string) =>
        set(state => {
          state.enchants = state.enchants.filter(
            (enchant: EnchantData) => enchant.enchant_id !== enchantId,
          );
        }),
      removeAllEnchants: () =>
        set(state => {
          state.enchants = [];
        }),
    })),
    { name: 'favoriteEnchants' },
  ),
);

export const useBookmarkState = () => {
  const enchants = useStore(store => store.enchants);
  const setEnchants = useStore(store => store.setEnchants);
  const pushEnchant = useStore(store => store.pushEnchant);
  const removeEnchant = useStore(store => store.removeEnchant);
  const removeAllEnchants = useStore(store => store.removeAllEnchants);

  return {
    enchants,
    setEnchants,
    pushEnchant,
    removeEnchant,
    removeAllEnchants,
  };
};
