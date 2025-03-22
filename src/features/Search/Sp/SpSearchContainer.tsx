import { Grid, Box } from '@mui/material';

import { useEnchantStore } from '../state/useEnchantStore';

import styles from './SpSearchContainer.module.css';
import { AmongAd } from './component/Ads/AmongAd';
import { LastInfeedAd } from './component/Ads/LastInfeedAd';
import { EnchantCard } from './component/EnchantCard/EnchantCard';
import { ScrollTopButton } from './component/ScrollTopButton/ScrollTopButton';

export const SpSearchContainer: React.FC = () => {
  const { enchants } = useEnchantStore();
  return (
    <>
      <Grid className={styles.dataWidth} item xs={12}>
        <Box sx={{ p: 1 }}>
          {enchants.map((enchant, index) => (
            <div key={enchant.id}>
              <AmongAd index={index} />
              <EnchantCard enchant={enchant} />
            </div>
          ))}
        </Box>
        <Box sx={{ p: 1 }}>
          <LastInfeedAd />
        </Box>
      </Grid>
      <ScrollTopButton />
    </>
  );
};
