# ワークフローステータス
## main
[![main](https://github.com/Kumario627/esdb_frontend/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/Kumario627/esdb_frontend/actions/workflows/main.yml)
## develop
[![main](https://github.com/Kumario627/esdb_frontend/actions/workflows/main.yml/badge.svg?branch=develop)](https://github.com/Kumario627/esdb_frontend/actions/workflows/main.yml)

# 環境構築
ローカルでの環境構築手順を示す。

## 前提条件
ローカルで環境を構築するために下記をinstallする必要がある。
- Node.js
- yarn

なおローカルで動作確認する際はesdb_backendのdockerイメージを作成しコンテナを起動している必要がある
起動方法はesdb_backendのREADME参照

## 手順
1. 本リポジトリをクローンする
2. 1.でクローンしたリポジトリのルートディレクトリで下記を実行
`yarn --frozen-lockfile`
3. `yarn start`で起動

## その他
- `yarn test` テストを実行する
- `yarn formater` 本リポジトリのソースで共通のフォーマッターを一括でかける
