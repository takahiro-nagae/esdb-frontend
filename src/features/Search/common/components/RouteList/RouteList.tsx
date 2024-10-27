import { isMobile } from 'react-device-detect';

import DOMPurify from 'dompurify';
import styles from './RouteList.module.css';

type RouteListProps = {
  routeNames: string[];
  omtCount: number;
};

export const RouteList: React.FC<RouteListProps> = ({
  routeNames,
  omtCount,
}) => {
  return (
    <>
      {routeNames &&
        routeNames
          .slice(0, omtCount)
          .map((route, index) => (
            <p
              className={isMobile ? styles.font : ''}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(route) }}
              key={index}
            />
          ))}
    </>
  );
};
