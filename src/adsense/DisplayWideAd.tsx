import { useAdSense } from './hooks/useAdsense';

export const DisplayWideAd: React.FC = () => {
  if (process.env.VITE_APP_ENV !== 'prod') {
    return <></>;
  }

  useAdSense();

  return (
    <>
      <script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8526200711405760'
        crossOrigin='anonymous'
      ></script>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-8526200711405760'
        data-ad-slot='1191995269'
        data-ad-format='auto'
        data-full-width-responsive='true'
      ></ins>
    </>
  );
};
