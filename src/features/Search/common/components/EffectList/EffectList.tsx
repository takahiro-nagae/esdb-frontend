import styles from './EffectList.module.css';

import { Enchant } from '@/features/Search/state/useEnchantStore';

type EffectListProps = {
  effects: Enchant['effect'];
};

export const EffectList: React.FC<EffectListProps> = ({ effects }) => {
  return (
    <>
      {effects &&
        effects.map((effect, index) => (
          <p
            className={styles[`${effect?.type}`]}
            data-testid='effect'
            key={index}
          >
            {effect?.name}
          </p>
        ))}
    </>
  );
};
