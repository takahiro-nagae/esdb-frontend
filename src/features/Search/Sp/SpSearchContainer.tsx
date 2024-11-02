import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';

import styles from './SpSearchContainer.module.css';
import { AmongAd } from './component/Ads/AmongAd';
import { LastInfeedAd } from './component/Ads/LastInfeedAd';
import { EnchantCard } from './component/EnchantCard/EnchantCard';
import { ScrollTopButton } from './component/ScrollTopButton/ScrollTopButton';

import { EnchantData } from '@/repositories/search/_types';


type SpSearchContainerProps = {
  rowData: Array<EnchantData>;
};

export const SpSearchContainer: React.FC<SpSearchContainerProps> = ({
  rowData,
}) => {
  return (
    <>
      <Grid className={styles.dataWidth} item xs={12}>
        <Box sx={{ p: 1 }}>
          {rowData.map((enchant, index) => (
            <>
              <AmongAd index={index} />
              <EnchantCard enchant={enchant} key={enchant.enchant_id} />
              <LastInfeedAd index={index} dataLength={rowData.length} />
            </>
          ))}
        </Box>
      </Grid>
      <ScrollTopButton />
    </>
  );
};
