import styles from './SearchResultHead.module.css';

type SearchResultType = {
  dispCount: number;
  count: number;
  effectName: string;
};

export const SearchResultHead: React.FC<SearchResultType> = ({
  dispCount,
  count,
  effectName,
}) => {
  return (
    <>
      {dispCount < 1 && <p className={styles.result}>検索結果は0件です</p>}
      {dispCount >= 1 && (
        <p className={styles.result}>
          <span className={styles.hitCount}>{count}</span>件ヒットしました
          {effectName != '' && (
            <>
              <br />
              <span>値：{effectName}</span>
            </>
          )}
        </p>
      )}
    </>
  );
};
