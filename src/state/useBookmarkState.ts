import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { Enchant } from '@/features/Search/state/useEnchantStore';

type State = {
  enchants: Enchant[];
};

type Action = {
  setEnchants: (enchants: Enchant[]) => void;
  pushEnchant: (enchant: Enchant) => void;
  removeEnchant: (enchantId: string) => void;
  removeAllEnchants: () => void;
};

export const isFavorite = (enchantId: string) =>
  useStore
    .getState()
    .enchants.find((enchant: Enchant) => enchant.id === enchantId);

const useStore = create<State & Action>()(
  persist(
    immer(set => ({
      enchants: [],
      setEnchants: (enchants: Enchant[]) =>
        set((state: State) => {
          state.enchants = enchants.map(enchant => {
            return {
              ...enchant,
              isInvalidTarget: false,
              invalidTargetName: '',
              value: 0,
            };
          });
        }),
      pushEnchant: (enchant: Enchant) =>
        set((state: State) => {
          if (!isFavorite(enchant.id)) {
            state.enchants.push({
              ...enchant,
              isInvalidTarget: false,
              value: 0,
            });
          }
        }),
      removeEnchant: (enchantId: string) =>
        set(state => {
          state.enchants = state.enchants.filter(
            (enchant: Enchant) => enchant.id !== enchantId,
          );
        }),
      removeAllEnchants: () =>
        set(state => {
          state.enchants = [];
        }),
    })),
    { name: 'favoriteEnchantsV2' },
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
