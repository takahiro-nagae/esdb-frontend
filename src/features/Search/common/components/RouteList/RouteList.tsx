// eslint-disable-next-line import/no-named-as-default
import DOMPurify from 'dompurify';
import { isMobile } from 'react-device-detect';

import styles from './RouteList.module.css';

type RouteListProps = {
  routeNames: (string | null)[];
  omtCount: number;
};

export const RouteList: React.FC<RouteListProps> = ({
  routeNames,
  omtCount,
}) => {
  const routes = routeNames?.filter(
    (route): route is string => route !== null,
  ) ?? [''];
  return (
    <>
      {routes &&
        routes
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
