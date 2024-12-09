import { useEnchantStore } from '../../state/useEnchantStore';

import styles from './SearchResultHead.module.css';

export const SearchResultHead: React.FC = () => {
  const { enchantsLength, effectName } = useEnchantStore();
  return (
    <>
      {enchantsLength < 1 && <p className={styles.result}>検索結果は0件です</p>}
      {enchantsLength >= 1 && (
        <p className={styles.result}>
          <span className={styles.hitCount}>{enchantsLength}</span>
          件ヒットしました
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
