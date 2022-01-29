import { Box, Grid, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import FeedIcon from '@mui/icons-material/Feed';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
/**
 * 当サイトについてコンポーネント
 */
export const About = () => {

    /** テキストのスタイル */
    const menuBase = css({
        verticalAlign: 'middle'
    });

    const menuText = css({
        verticalAlign: 'middle',
        marginLeft: '5px'
    });

    const menuSpace = css({
        marginTop: '8px'
    });

    return(
        <Box sx={{ mt: 3}}>
            <Grid container justifyContent="center">
                <Grid item xs={11}>
                    <Paper>
                        <Box sx={{ p: 2}}>
                            <h2>当サイトについて</h2>
                            <Box sx={{ p: 2}}>
                                <h3>概要</h3>
                                <Box sx={{ ml: 2}}>
                                    <p>
                                        当サイトはNEXON様の運営するMMORPG「マビノギ」内のエンチャントスクロール情報を検索するためのサイトです。<br/>
                                        全てのページがリンクフリーでご利用いただけます。リンク及び引用、スクリーンショット等ご自由にお使いください。
                                    </p>
                                </Box>
                            </Box>
                            <Box sx={{ p: 2}}>
                                <h3>お問合せ先</h3>
                                <Box sx={{ ml: 2}}>
                                    <p>
                                        下記からご連絡いただけます。<br/>
                                        当サイトについてお問合せございましたらDMでご連絡いただけますと幸いです。
                                    </p>
                                    <NavLink to="https://twitter.com/mabiesdb">
                                        <TwitterIcon css={menuBase} />
                                        <span css={menuText}>公式Twitter</span>
                                    </NavLink>

                                </Box>
                            </Box>
                            <Box sx={{ p: 2}}>
                                <h3>管理者について</h3>
                                <Box sx={{ ml: 2}}>
                                    <p>
                                        マリーサーバー在住の「クマリオ」が運営しています。
                                    </p>
                                    <div>
                                        <NavLink to="https://twitter.com/jackumagic">
                                            <TwitterIcon css={menuBase} />
                                            <span css={menuText}>Twitter</span>
                                        </NavLink>
                                    </div>
                                    <div css ={menuSpace}>
                                        <NavLink to="https://jackumagic.com">
                                            <FeedIcon css={menuBase} />
                                            <span css={menuText}>ブログ</span>
                                        </NavLink>
                                    </div>
                                    <div css={menuSpace}>
                                        <NavLink to="https://www.youtube.com/channel/UCXBUjcXZta7-zKA-qSj-zFw/featured">
                                                <YouTubeIcon css={menuBase} />
                                                <span css={menuText}>YouTubeチャンネル</span>
                                        </NavLink>
                                    </div>
                                </Box>
                            </Box>
                            <Box sx={{ p: 2}}>
                                <h3>データの収集元</h3>
                                <Box sx={{ ml: 2}}>
                                    <p>
                                        <a href="http://fruitmilk.xii.jp/enchant/">エンチャント検索っぽいそれ</a>様より大元のデータを頂きました。<br/>
                                        先方のご協力無しでは本サイトのリリースまで辿り着けませんでした。<br/>
                                        誠にありがとうございます。
                                    </p>
                                    <p>
                                        追加のデータとして一部<a href="https://wikiwiki.jp/mabinogi/">Mabinogi Wiki</a>やユーザの皆様からご教示いただきましたデータも追加させていただいております。
                                    </p>
                                    <p>
                                        最新データは日本版正式実装データを主な対象にデータを追加しております。<br />
                                        例外的にアップデートが確定しているコンテンツのエンチャントは先行情報をもとにデータ追加を実施します。
                                    </p>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};