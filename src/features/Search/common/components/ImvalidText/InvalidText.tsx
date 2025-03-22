import styles from './InvalidText.module.css';

type InvalidTextProps = {
  isInvalidTarget: boolean;
};

export const InvalidText: React.FC<InvalidTextProps> = ({
  isInvalidTarget,
}) => {
  return (
    <>{isInvalidTarget && <small className={styles.invalid}>貼付不可</small>}</>
  );
};
