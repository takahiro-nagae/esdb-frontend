import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
  enchantName: string;
};

type Action = {
  setEnchantName: (enchantName: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    enchantName: '',
    setEnchantName: (enchantName: string) => set({ enchantName }),
  })),
);

export const useEnchantNameStore = () => {
  const enchantName = useStore(store => store.enchantName);
  const setEnchantName = useStore(store => store.setEnchantName);

  return { enchantName, setEnchantName };
};
