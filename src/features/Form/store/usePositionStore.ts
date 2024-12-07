import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
  position: string;
};

type Action = {
  setPosition: (position: string) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    position: '0',
    setPosition: (position: string) => set({ position }),
  })),
);

export const usePositionStore = () => {
  const position = useStore(store => store.position);
  const setPosition = useStore(store => store.setPosition);

  return { position, setPosition };
};
