import { useEffect } from 'react';

export const useAdSense = () => {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);
};
