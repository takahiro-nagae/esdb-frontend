import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

import { DisplayWideAd } from '../../adsense/DisplayWideAd';

export const AppHistory: React.FC = () => {
  /** widgetロード可否 */
  let isLoadWidgets = false;

  useEffect(() => {
    if (!isLoadWidgets) {
      const s = document.createElement('script');
      s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.body.appendChild(s);
      isLoadWidgets = true;
    }
  }, []);

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container justifyContent='center'>
        <Grid item xs={11}>
          <DisplayWideAd />
          <Paper style={{ marginTop: '15px' }}>
            <Box sx={{ p: 2 }}>
              <h2>更新履歴</h2>
              <Box sx={{ p: 2 }}>
                <Box sx={{ ml: 2 }}>
                  <p>ESDBの更新履歴です。</p>
                  <a
                    className='twitter-timeline'
                    data-height='800'
                    data-theme='dark'
                    href='https://twitter.com/mabiesdb?ref_src=twsrc%5Etfw'
                  ></a>
                </Box>
              </Box>
            </Box>
          </Paper>
          <DisplayWideAd />
        </Grid>
      </Grid>
    </Box>
  );
};
