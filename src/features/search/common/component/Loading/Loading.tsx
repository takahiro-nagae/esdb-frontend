import ReactLoading from 'react-loading';
import styles from './Loading.module.css';

type LoadingProps = {
  isLoading: boolean;
};

export const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <>
      {!isLoading && (
        <div className={styles.loadingContainer} data-testid='loading'>
          <ReactLoading className={styles.verticalCenter} type='bubbles' />
        </div>
      )}
    </>
  );
};
