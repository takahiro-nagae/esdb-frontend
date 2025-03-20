import styles from './ImpText.module.css';

type ImpTextProps = {
  isImp: boolean;
};

export const ImpText: React.FC<ImpTextProps> = ({ isImp: impFlg }) => {
  return <>{!impFlg && <small className={styles.notImped}>未実装</small>}</>;
};
