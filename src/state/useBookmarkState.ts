import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

type SaveEnchants = Omit<
  GetEnchantDetailsQuery['details']['enchants'][number],
  'value'
>[];

type ReceiveEnchants = GetEnchantDetailsQuery['details']['enchants'];

type State = {
  enchants: SaveEnchants;
};

type Action = {
  setEnchants: (enchants: ReceiveEnchants) => void;
  pushEnchant: (enchant: ReceiveEnchants[number]) => void;
  removeEnchant: (enchantId: string) => void;
  removeAllEnchants: () => void;
};

export const isFavorite = (enchantId: string) =>
  useStore
    .getState()
    .enchants.find((enchant: SaveEnchants[number]) => enchant.id === enchantId);

const useStore = create<State & Action>()(
  persist(
    immer(set => ({
      enchants: [],
      setEnchants: (enchants: ReceiveEnchants) =>
        set((state: State) => {
          state.enchants = enchants.map(enchant => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { value, ...rest } = enchant;
            return rest;
          });
        }),
      pushEnchant: (enchant: ReceiveEnchants[number]) =>
        set((state: State) => {
          if (!isFavorite(enchant.id)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { value, ...rest } = enchant;
            state.enchants.push(rest);
          }
        }),
      removeEnchant: (enchantId: string) =>
        set(state => {
          state.enchants = state.enchants.filter(
            (enchant: SaveEnchants[number]) => enchant.id !== enchantId,
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
