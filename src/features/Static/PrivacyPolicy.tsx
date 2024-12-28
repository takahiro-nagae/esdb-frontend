import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';

import { DisplayWideAd } from '../../adsense/DisplayWideAd';

export const PrivacyPolicy: React.FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container justifyContent='center'>
        <Grid item xs={11}>
          <DisplayWideAd />
          <Paper style={{ marginTop: '15px' }}>
            <Box sx={{ p: 2 }}>
              <h2>プライバシーポリシー</h2>
              <Box sx={{ p: 2 }}>
                <h3>アクセス解析ツールについて</h3>
                <Box sx={{ ml: 2 }}>
                  <p>
                    当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
                    <br />
                    このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
                  </p>
                  <p>
                    このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                    <br />
                    この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
                    <br />
                    この規約に関して、詳しくは
                    <a
                      target='__blank'
                      href='https://marketingplatform.google.com/about/analytics/terms/jp/'
                    >
                      こちらをクリックしてください。
                    </a>
                  </p>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <h3>免責事項</h3>
                <Box sx={{ ml: 2 }}>
                  <p>
                    当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                    <br />
                    当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
                  </p>
                  <p>
                    当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                  </p>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <h3>プライバシーポリシーの変更について</h3>
                <Box sx={{ ml: 2 }}>
                  <p>
                    当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
                    <br />
                    修正された最新のプライバシーポリシーは常に本ページにて開示されます。
                  </p>
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
