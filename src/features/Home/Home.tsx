import React from 'react';
import { MultiplexAd } from '../../adsense/MultiplexAd';
import { SearchFormContainer } from '../Form/SearchFormContainer';

export const Home: React.FC = () => {
  return (
    <>
      <SearchFormContainer />
      <MultiplexAd />
    </>
  );
};
