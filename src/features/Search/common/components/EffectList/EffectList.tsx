import styles from './EffectList.module.css';

import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

type EffectListProps = {
  effects: GetEnchantDetailsQuery['details']['enchants'][number]['effect'];
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
