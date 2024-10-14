import styles from './ImpText.module.css';

type ImpTextProps = {
  impFlg: string;
};

export const ImpText: React.FC<ImpTextProps> = ({ impFlg }) => {
  return (
    <>{impFlg == '0' && <small className={styles.notImped}>未実装</small>}</>
  );
};
