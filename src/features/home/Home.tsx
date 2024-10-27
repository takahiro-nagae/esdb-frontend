import React from 'react';
import { MultiplexAd } from '../../adsense/MultiplexAd';
import { SearchFormContainer } from '../form/SearchFormContainer';

export const Home: React.FC = () => {
  return (
    <>
      <SearchFormContainer />
      <MultiplexAd />
    </>
  );
};
