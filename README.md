<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  oe-japan-cms
</h1>

このサイトは [Gatsby](https://www.gatsbyjs.com/) を使って作成しています．

### 注意

Github のアカウントがあることを前提にしています。
大学関係者であれば [Github Pro アカウント](https://docs.github.com/ja/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount) を取得できます。

また、ビルドには `yarn` もしくは `npm` が必要になります。

## 🚀 インストール

まず、Github からクローンします。
適当な作業ディレクトに移動して、以下を実行。

```
git clone git@github.com:Github-ID/oe-japan-cms.git
```

ここで`Github-ID`は Github のアカウント名です。

クローンしたディレクトに移動し、そこで作業します。

```
$ cd oe-japan-cms
$ ls
LICENSE          README.md        _headers         gatsby-config.js gatsby-node.js   lambda           netlify.toml     package.json     renovate.json    src              static
```

🧐 What's inside?

ディレクトリは以下のようになっています．

```
$ tree -L 1
.
├── LICENSE
├── README.md
├── _headers
├── gatsby-config.js
├── gatsby-node.js
├── lambda
├── netlify.toml
├── node_modules
├── package.json
├── renovate.json
├── src
├── static
└── yarn.lock

4 directories, 9 files
```

以下，重要なものだけ説明します．

/node_modules:
ここに npm package でインストールしたモジュールが入ります．
後述する`yarn`を実行すると作成されます．
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
yarn
```

`npm install` でも OK ですが、`yarn`の方が早いです。
なお、`yarn`と`npm`を混在して使うと誤動作する場合がありますので、やめましょう。

## ビルド (build)

ビルドとは、サイトを公開するための html, Javascript や CSS ファイルを作成することを言います。
ビルドが通れば Warning が出ても問題ありません。

ビルドは以下のコマンドで実行できます。

```
$ gatsby clean && gatsby build
(npm run clean; npm run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンドです。
`npm run clean, npm run build` は `package.json`で定義されています。

## ディベロプ (develop)

ディベロプとは、公開前の一次チェックをするために html, Javascript や CSS ファイルを作成することを言います。

```
$ gatsby clean && gatsby develop
(npm run clean; npm run develop でもOK)
```

<http://localhost:8000/> で見ることができます．

## 公開

Github Actions を設定してありますので，github の master branch に push すると自動でスクリプトが走り，公開ファイルを転送します．
Github Actions の設定ファイルは `.github/workflows/manual.yml` です．

# コンテンツの追加，修正，削除

コンテンツデータは，src/pages に入っているマークダウンファイル（拡張子が`.md`）です．

```
$ tree
.
├── 404.js
├── about
│   └── index.md
├── contact
│   ├── member.js
│   └── thanks.js
├── history
│   └── index.md
├── index.md
├── members
│   └── index.md
├── news
│   ├── 2015-JOCW-General-Assembly.md
│   ├── 2016-JOCW-General-Assembly.md
│   ├── 2017-JOCW-General-Assembly.md
│   ├── 2018-JOCW-General-Assembly.md
│   ├── 2018-JOCW-International-Workshop.md
│   ├── Activities-of-participating-organizations-Hokkaido-University.md
│   ├── Creative-Commons-License-Study-Meeting.md
│   ├── Educational-Reform-Pioneered-by-Open-Education-Learning-from-the-World-Most-Advanced-Cases.md
│   ├── Infoed2008-Global-Trends-in-Open-Content.md
│   ├── Infoed2010-Impact-and-Future-Prospects-of-Open-Courseware.md
│   ├── JSEE2009-Open-Content-and-its-Applications.md
│   ├── JSEE2010-OpenCourseWare-and-its-Applications.md
│   ├── Japanese-translation-of-the-Paris-OER-Declaration.md
│   ├── Open-Education-Global-2017.md
│   ├── Open-Education-Global-Conference-2015.md
│   ├── Open-Education-Leadership-Summit.md
│   ├── Past-Events.md
│   ├── Past-Topics.md
│   ├── Report-on-the-2018-JOCW-International-Workshop.md
│   ├── Special-Lecture-From-OpenCourseWare-to-Open-Education.md
│   └── index.js
└── tags
    └── index.js

6 directories, 29 files
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

以下，`src/news` の `Activities-of-participating-organizations-Hokkaido-University.md` を例に説明します．

ファイル名がそのまま slug になります．たとえば，この例ですと，

<https://oejapan.org/news/Activities-of-participating-organizations-Hokkaido-University/>

となります．ファイル名が日本語でも大丈夫だとは思いますが，英数字の方が何かと安全ですのでファイル名は英数字としてください．

`src/news/Activities-of-participating-organizations-Hokkaido-University.md` は以下のようになっています．

```
---
templateKey: blog-post
title: 参加団体の活動 北海道大学
date: 2019-5-28T14:13:10.000Z
featuredpost: true
featuredimage: /img/blog/huocw.png
description: 参加団体の活動報告です。第1回は北海道大学です。
tags:
  - 北海道大学
  - 活動報告
---
![](/img/blog/huocw.png)
[北海道大学オープンコースウェア　https://ocw.hokudai.ac.jp/](https://ocw.hokudai.ac.jp/)

北海道大学オープンエデュケーションセンターでは、OERの開発と活用を通じた教育改善を推進しています。学内教育に用いるeラーニング教材の開発と授業への導入、OCWやMOOCの公開に取り組んでいます。

北海道大学はオープンコースウェア（HU-OCW）を開設しています。最近では、農学研究院で実施された「食と農に関するリスクコミュニケーション」での７講義を配信しました。本講義は大学内に今のところ存在しない座学でのリスクコミュニケーション教育と、それを受講した上での実社会での対話の取組を行う学内外向けカリキュラムの一部をオープン教材として公開したものとなります。また水産化学研究院が中心となって実施された『食物の発酵と熟成』（第3回北海道食文化研究会セミナー）を公開しました。発酵食品の味について味覚センサーを用いた研究を紹介しています。

OERの開発については、保健科学研究院で実施しているベッドメイキング等の実技の見本を撮影し、学内向けに配信しています。学生が繰り返し視聴することで実技試験対策に用いられています。
教材改善活動もOERを活用することと並行して進められています。演習科目「大学生のための情報社会入門」では、OERを用いて反転授業が開講中です。今後学生のビデオ視聴データやクイズの回答状況などについて、開発した可視化ツールを用いて分析作業を行う予定です。

![](/img/blog/eow.jpg)
MOOC「戦争倫理学」

そして、講義で活用したOERを利用したMOOC開講の準備も行っています。本学では毎年１つMOOC開講を実施することを目標に活動しています。最近では「戦争倫理学」の再開講を実施し、先月4月末日をもって無事閉講となりました。今年度は、教養教育での演習科目である「放射線・放射能の科学」で用いている反転授業向け教材をもとにしたMOOCを開講予定です。
```

ここで，`templateKey: blog-post` は変更してはいけません．
この templateKey は src/pages 以下のディレクトリでそれぞれ指定され，指定されたテンプレートを利用して表示用ファイルが生成されます．
News の場合は templateKey を blog-post と指定しています．なお，members の場合は `templateKey: 'members-page'` と指定します．

`title` はタイトルですので，適宜修正してください．

`date` は掲載日ですので，適宜修正してください．

`featuredpost: true` はそのまま変更しなくて結構です．

`featuredimage` はアイキャッチ画像になります．ディフォルト画像は static/img/ にある画像です．
アップロードして利用したい場合には static/img/blog におき，/img/blog/ファイル名 で指定してください．
たとえば，/static/img/blog/huocw.png を指定する場合は `featuredimage: /img/blog/huocw.png` となります．

`description` は概要ですので，適宜修正してください．

`tags` はタグになります．タグは上に記載のように「-」で一行にひとつ書いてください．

ここまでが，Frontmatter です．
「---」以降が本文になり，マークダウン形式で記載してください．

この例ですと

```
![](/img/blog/huocw.png)
[北海道大学オープンコースウェア　https://ocw.hokudai.ac.jp/](https://ocw.hokudai.ac.jp/)

北海道大学オープンエデュケーションセンターでは、OERの開発と活用を通じた教育改善を推進しています。
学内教育に用いるeラーニング教材の開発と授業への導入、OCWやMOOCの公開に取り組んでいます。

北海道大学はオープンコースウェア（HU-OCW）を開設しています。
最近では、農学研究院で実施された「食と農に関するリスクコミュニケーション」での７講義を配信しました。
本講義は大学内に今のところ存在しない座学でのリスクコミュニケーション教育と、それを受講した上での実社会での対話の取組を行う学内外向けカリキュラムの一部をオープン教材として公開したものとなります。
また水産化学研究院が中心となって実施された『食物の発酵と熟成』（第3回北海道食文化研究会セミナー）を公開しました。
発酵食品の味について味覚センサーを用いた研究を紹介しています。

OERの開発については、保健科学研究院で実施しているベッドメイキング等の実技の見本を撮影し、学内向けに配信しています。
学生が繰り返し視聴することで実技試験対策に用いられています。
教材改善活動もOERを活用することと並行して進められています。
演習科目「大学生のための情報社会入門」では、OERを用いて反転授業が開講中です。
今後学生のビデオ視聴データやクイズの回答状況などについて、開発した可視化ツールを用いて分析作業を行う予定です。

![](/img/blog/eow.jpg)
MOOC「戦争倫理学」

そして、講義で活用したOERを利用したMOOC開講の準備も行っています。
本学では毎年１つMOOC開講を実施することを目標に活動しています。
最近では「戦争倫理学」の再開講を実施し、先月4月末日をもって無事閉講となりました。
今年度は、教養教育での演習科目である「放射線・放射能の科学」で用いている反転授業向け教材をもとにしたMOOCを開講予定です。
```

が本文になり，マークダウン形式で記載されています．

# Github でのデータの追加・修正・削除

このサイトは Github Actions を設定してあります．
Github の master branch に push すると自動でスクリプトが走り，公開ファイルを転送します．

従って，データ修正は master branch では行わず，branch をきってからデータ修正を行ってください．
データ修正後は `gatsby develop` で問題無いことを確認の上，pull request を行い，master branch へマージしてください．

面倒ですが，master branch とは異なる branch で作業することで，思わぬミスを防ぐことができますので安全です．

# Netlify CMS でのデータの追加・修正・削除

データの追加・修正・削除は [Netlify CMS](https://oe-japan.netlify.app/admin/) でもできます。

[Netlify CMS](https://oe-japan.netlify.app/admin/) にアクセスすると次のようになります．

<img width="1445" alt="スクリーンショット 2022-03-03 17 50 04" src="https://user-images.githubusercontent.com/12372151/156530714-5140a2ba-5fbb-485a-b576-824db81f58cf.png">

ここで，左メニューでは「News」が選択されていて，右にその一覧が表示されます．また，右の「New News」をクリックすることで新規 News を作成できます．
一覧の各Newsをクリックすることで編集画面に遷移します．コンテンツの削除も編集画面から行います．

## 新規コンテンツ（News）の作成

先に書いたように最初のページの右上にある「New News」をクリックしてください．

<img width="1330" alt="スクリーンショット 2022-03-03 18 05 16" src="https://user-images.githubusercontent.com/12372151/156532460-ed190354-edf1-4f20-b36d-6d56d3201f4d.png">

左が編集画面，右がhtmlへ変換した画面になります．なお，右は参考程度として見てください．

## コンテンツ（News）の編集

