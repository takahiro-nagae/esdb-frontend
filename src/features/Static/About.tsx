import FeedIcon from '@mui/icons-material/Feed';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

import { DisplayWideAd } from '../../adsense/DisplayWideAd';

import styles from './About.module.css';

export const About: React.FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container justifyContent='center'>
        <Grid item xs={11}>
          <DisplayWideAd />
          <Paper style={{ marginTop: '15px', background: '#424242' }}>
            <Box sx={{ p: 2 }}>
              <h2>当サイトについて</h2>
              <Box sx={{ p: 2 }}>
                <h3>概要</h3>
                <Box sx={{ ml: 2 }}>
                  <p>
                    当サイトはNEXON様の運営するMMORPG「マビノギ」内のエンチャントスクロール情報を検索するためのサイトです。
                    <br />
                    全てのページがリンクフリーでご利用いただけます。リンク及び引用、スクリーンショット等ご自由にお使いください。
                  </p>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <h3>お問合せ先</h3>
                <Box sx={{ ml: 2 }}>
                  <p>
                    下記からご連絡いただけます。
                    <br />
                    当サイトについてお問合せございましたらDMでご連絡いただけますと幸いです。
                  </p>
                  <NavLink to='https://twitter.com/mabiesdb'>
                    <TwitterIcon className={styles.icon} />
                    <span className={styles.iconText}>公式Twitter</span>
                  </NavLink>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <h3>管理者について</h3>
                <Box sx={{ ml: 2 }}>
                  <p>マリーサーバー在住の「クマリオ」が運営しています。</p>
                  <div>
                    <NavLink to='https://twitter.com/jackumagic'>
                      <TwitterIcon className={styles.icon} />
                      <span className={styles.iconText}>Twitter</span>
                    </NavLink>
                  </div>
                  <div className={styles.menuSpace}>
                    <NavLink to='https://jackumagic.com'>
                      <FeedIcon className={styles.icon} />
                      <span className={styles.iconText}>ブログ</span>
                    </NavLink>
                  </div>
                  <div className={styles.menuSpace}>
                    <NavLink to='https://www.youtube.com/channel/UCXBUjcXZta7-zKA-qSj-zFw/featured'>
                      <YouTubeIcon className={styles.icon} />
                      <span className={styles.iconText}>YouTubeチャンネル</span>
                    </NavLink>
                  </div>
                </Box>
              </Box>
              <Box sx={{ p: 2 }}>
                <h3>データの収集元</h3>
                <Box sx={{ ml: 2 }}>
                  <p>
                    <a href='http://fruitmilk.xii.jp/enchant/'>
                      エンチャント検索っぽいそれ
                    </a>
                    様より大元のデータを頂きました。
                    <br />
                    先方のご協力無しでは本サイトのリリースまで辿り着けませんでした。
                    <br />
                    誠にありがとうございます。
                  </p>
                  <p>
                    追加のデータとして一部
                    <a href='https://wikiwiki.jp/mabinogi/'>Mabinogi Wiki</a>
                    やユーザの皆様からご教示いただきましたデータも追加させていただいております。
                  </p>
                  <p>
                    最新データは日本版正式実装データを主な対象にデータを追加しております。
                    <br />
                    例外的にアップデートが確定しているコンテンツのエンチャントは先行情報をもとにデータ追加を実施します。
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
