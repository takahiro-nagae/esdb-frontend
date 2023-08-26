# Git hooks for esdb_frontend

esdb_frontendリポジトリ内に置かれたスクリプトを叩くGit hooksをセットアップします。

[Git のカスタマイズ - Git フック](http://git-scm.com/book/ja/Git-%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA-Git-%E3%83%95%E3%83%83%E3%82%AF)

## セットアップ手順

init_hooks.shを叩くだけです。
**ローカルにhooksがある場合は上書きされてしまうので気をつけてください。**

```sh
$ bin/git/init_hooks.sh
```

## 仕組み

`init_hooks.sh`は`bin/git/hooks`ディレクトリ内にあるディレクトリ名を使って`.git/hooks/ディレクトリ名`というシンボリックリンクを作成します。
シンボリックリンクの指し先は`bin/git/_hook.sh`になります。

フックの実体となる`_hook.sh`は、`bin/git/hooks/シンボリックリンク名`下のスクリプトを順番に実行します。

## 各スクリプトの説明

### pre-commit

#### lint-js.sh

変更したJSファイルに対してESLintを実行します。
変更しなかった場合は何もしません。