<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  oe-japan-cms
</h1>

このサイトは [Gatsby](https://www.gatsbyjs.com/) を使って作成しています．

### 注意：

Github のアカウントがあることを前提にしています。
大学関係者であれば[Github Pro アカウント](https://docs.github.com/ja/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount)を取得できます。

また、ビルドには `yarn` もしくは `npm` が必要になります。

## 🚀 インストール

まず、Github からクローンします。
適当な作業ディレクトに移動して、以下を実行。

```
% git clone git@github.com:Github-ID/oe-japan-cms.git
```

ここで`Github-ID`は Github のアカウント名です。

クローンしたディレクトに移動し、そこで作業します。

```
% cd oe-japan-cms
% ls
CODE_OF_CONDUCT.md LICENSE            _headers           gatsby-node.js     netlify.toml       renovate.json      static
CONTRIBUTING.md    README.md          gatsby-config.js   lambda             package.json       src                yarn.lock
```

🧐 What's inside?

ディレクトリは以下のようになっています．

```
$ tree -L 1
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── _headers
├── gatsby-config.js
├── gatsby-node.js
├── lambda
├── netlify.toml
├── node_modules
├── package.json
├── public
├── renovate.json
├── src
├── static
└── yarn.lock
```

以下，重要なものだけ説明します．

/node_modules:
ここに npm package でインストールしたモジュールが入ります．
このディレクトリに対して特段のアクションは必要ありません．ほっとけば良いです．

/src:
このディレクトリに公開用のファイルが一式入ります．
つまり，ブラウザで表示するのに必要なファイルが格納されています．
従って，このディレクトリに入っているファイルの修正，追加，削除することで Web ページのデザインを行います．

/static:
このディレクトリは，Gatsby では参照されるのみで特段の操作は行いません．
従って，こちらには画像ファイルや既に作成してある静的ファイルなどをおきます．

/public:
公開用のディレクトリです．
gatsby build を実行すると，このディレクトリに公開用ファイルが生成されます．
また，gatsby clean を実行すると，このディレクトリとキャッシュがクリアされます．

.gitignore:
Github リポジトリから除外するファイルを指定します．

gatsby-config.js:
Gatsby サイトの設定ファイルです．

gatsby-node.js:
Gatsby Node API の設定ファイルです．

package-lock.json (See package.json below, first).
npm によって自動生成されるファイルです．

package.json:
Node で実行するパッケージを指定するファイルです．

README.md:
このファイルです．

### 環境構築

`yarn` で環境構築を行います。

```
% yarn
```

`npm install` でも OK ですが、`yarn`の方が早いです。
なお、`yarn`と`npm`を混在して使うと誤動作する場合がありますので、やめましょう。

## ビルド (build)

ビルドとは、サイトを公開するための html, Javascript や CSS ファイルを作成することを言います。
ビルドが通れば Warning が出ても問題ありません。

ビルドは以下のコマンドで実行できます。

```
% gatsby clean && gatsby build
(npm run clean; npm run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンドです。
`npm run clean, npm run build` は `package.json`で定義されています。

## ディベロプ (develop)

ディベロプとは、公開前の一次チェックをするために html, Javascript や CSS ファイルを作成することを言います。

```
% gatsby clean && gatsby develop
(npm run clean; npm run develop でもOK)
```

http://localhost:8000/ で見ることができます．

## 公開

Github Actions を設定してありますので，github の main branch に push すると自動でスクリプトが走り，公開ファイルを転送します．
Github Actions の設定ファイルは `.github/workflows/manual.yml` です．

# コンテンツの追加，修正，削除

コンテンツデータは，src/pages に入っているマークダウンファイルです．

```
├── src
│   ├── img
│   ├── pages
│   │   ├── 404.js
│   │   ├── awards
│   │   │   └── index.md
│   │   ├── contact
│   │   │   └── index.js
│   │   ├── division
│   │   │   ├── Data-Science.md
│   │   │   ├── Doctoral-Education.md
│   │   │   ├── High-School-University-Articulation.md
│   │   │   ├── Instructional-Design-Team.md
│   │   │   ├── Liberal-Arts.md
│   │   │   ├── Life-Concept.md
│   │   │   ├── Promotion-Planning-Office.md
│   │   │   ├── QTA.md
│   │   │   └── index.js
│   │   ├── index.md
│   │   ├── news
│   │   │   ├── 2021-06-07-トップリーダートーク.md
│   │   │   ├── 2021-06-07-名古屋大学全学教育物理学実験.md
│   │   │   ├── 2021-06-24-化学実験ホームページ.md
│   │   │   ├── 2021-07-13-アカデミック・イングリッシュ支援室（access）.md
│   │   │   └── index.js
│   │   └── tags
│   │       └── index.js
```

## コンテンツの修正

src/pages のマークダウンファイルを編集してください．

## コンテンツの削除

src/pages のマークダウンファイルを削除してください．

## コンテンツの追加

src/pages に新しいマークダウンファイルを追加してください．
マークダウンファイルは，同じディレクトリにあるファイルをコピーし，ファイル名を変更して作成するのが早いです．
このとき，マークダウンファイルに記載のフォーマットは変更しないようにしてください．
特に上段の Frontmatter の項目は Gatsby が参照しますので，コロン以降のみ変更するようにしてください．

以下，src/news の 2021-06-07-トップリーダートーク.md を例に説明します．

ファイル名がそのまま slug になります．たとえば，この例ですと，

https://ac.thers.ac.jp/news/2021-06-07-トップリーダートーク/

となります．たぶん大丈夫だとは思いますが，ファイル名は英数字の方が安全かと思われます．

src/news/2021-06-07-トップリーダートーク.md は以下のようになっています．

```
templateKey: blog-post
title: トップリーダートーク
date: 2021-05-06T10:05:39.789Z
description: >-
  トップリーダートークでは、各界の指導的立場にある産学官のトップリーダーを招き、レクチャーやディスカッションを通じてトップの役割や使命、リーダーシップのあり方などを直接学ぶ機会を提供しています。

  今回は東海国立大学機構長・名古屋大学総長である松尾清一氏をお招きし、「私の歩んできた道ー安定は動の中に在り」というテーマで講演をしていただきます。
featuredpost: true
featuredimage: /img/coffee.png
tags:
  - トップリーダートーク
  - 博士課程教育推進機構
  - 松尾清一氏（東海国立大学機構長・名古屋大学総長）
---

# 松尾清一氏（東海国立大学機構長・名古屋大学総長）

参加にあたって 2 種類の参加方法があります。
.....

```

ここで，`templateKey: blog-post` は変更してはいけません．
この templateKey は src/pages 以下のディレクトリでそれぞれ指定され，指定されたテンプレートを利用して表示用ファイルが生成されます．
News の場合は templateKey を blog-post と指定しています．なお，awards の場合は awards-page と指定します．

`title` はタイトルですので，適宜修正してください．

`description` は概要ですので，適宜修正してください．

`featuredpost: true` はそのまま変更しなくて結構です．

`featuredimage` はアイキャッチ画像になります．ディフォルト画像は static/img/ にある画像です．
アップロードして利用したい場合には static/img/ におき，/img/ファイル名 で指定してください．
たとえば，static/img/ac1.jpg を指定する場合は `featuredimage: /img/ac1.jpg` となります．

`date` は掲載日ですので，適宜修正してください．

`tags` はタグになります．タグは上に記載のように「-」で一行にひとつ書いてください．

ここまでが，Frontmatter です．
「---」以降が本文になり，マークダウン形式で記載してください．

この例ですと

```
# 松尾清一氏（東海国立大学機構長・名古屋大学総長）

参加にあたって 2 種類の参加方法があります。
．．．
```

が本文になり，マークダウン形式で記載されています．

# Github でのデータの追加・修正・削除

このサイトは Github Actions を設定してあります．
Github の main branch に push すると自動でスクリプトが走り，公開ファイルを転送します．

従って，データ修正は main branch では行わず，branch をきってからデータ修正を行ってください．
データ修正後は `gatsby develop` で問題無いことを確認の上，pull request を行い，main branch へマージしてください．

面倒ですが，main branch とは異なる branch で作業することで，思わぬミスを防ぐことができますので安全です．

# Netlify CMS でのデータの追加・修正・削除

データの追加・修正・削除は [Netlify CMS](https://academic-central.netlify.app/admin/#/collections/news)でもできます。

Netlify CMS へアクセスすると以下のように表示されます。
コンテンツの追加・修正・削除はここから行ってください。

<img width="988" alt="スクリーンショット 2021-10-19 14 01 34" src="https://user-images.githubusercontent.com/12372151/137847935-cd017206-0e24-435f-8190-b6654d063e3d.png">

画像は上の「Media」ボタンを押下することで追加・修正・削除ができます。

<img width="1122" alt="スクリーンショット 2021-10-19 14 18 22" src="https://user-images.githubusercontent.com/12372151/137848370-4357adef-0663-4cef-bdd6-922976f30c2a.png">
