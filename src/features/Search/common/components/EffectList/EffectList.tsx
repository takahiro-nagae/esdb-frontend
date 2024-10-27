import styles from './EffectList.module.css';

type EffectListProps = {
  effectKbn: string;
  effectName: string;
};

export const EffectList: React.FC<EffectListProps> = ({
  effectKbn,
  effectName,
}) => {
  /** 効果区分を配列化 */
  const effectKbnArray: '' | string[] = effectKbn && effectKbn.split('@');
  /** 効果名を配列化 */
  const effectNameArray: '' | string[] = effectName && effectName.split('@');

  return (
    <>
      {effectKbnArray &&
        effectKbnArray.map((effectKbn, index) => (
          <p
            className={styles[`${effectKbn}`]}
            data-testid='effect'
            key={index}
          >
            {effectNameArray[index]}
          </p>
        ))}
    </>
  );
};
