import styles from './InvalidText.module.css';

type InvalidTextProps = {
  invalidTargetFlg: string | number | undefined;
};

export const InvalidText: React.FC<InvalidTextProps> = ({
  invalidTargetFlg,
}) => {
  if (!invalidTargetFlg) {
    return null;
  }

  return (
    <>
      {invalidTargetFlg === 1 && (
        <small className={styles.invalid}>貼付不可</small>
      )}
    </>
  );
};
