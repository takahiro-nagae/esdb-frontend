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

## 手順
1. 本リポジトリをクローンする
2. 1.でクローンしたリポジトリのルートディレクトリで下記を実行
`yarn --frozen-lockfile`
3. `yarn dev`で起動

## その他
- `yarn test` テストを実行する
- `yarn formater` 本リポジトリのソースで共通のフォーマッターを一括でかける
