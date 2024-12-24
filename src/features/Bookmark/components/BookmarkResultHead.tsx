import styles from './BookmarkResultHead.module.css';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';

export const BookMarkResultHead: React.FC = () => {
  const { enchantsLength } = useEnchantStore();
  return (
    <>
      {enchantsLength < 1 && (
        <p className={styles.result}>ブックマークは0件です</p>
      )}
      {enchantsLength >= 1 && (
        <p className={styles.result}>
          <span className={styles.hitCount}>{enchantsLength}</span>
          件ブックマークしています
        </p>
      )}
    </>
  );
};
