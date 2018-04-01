# sKawashimaの開発技術学習目録
[![maker](https://img.shields.io/badge/maker-sKawashima-4e1a68.svg)](http://skawashima.com/) ![GitHub last commit](https://img.shields.io/github/last-commit/sKawashima/DictionaryOfDevelopmentTechnologyILearned.svg)


自分が調べた・調べたい技術関連の情報をまとめます。
各ジャンルごとに、使用頻度が高いものを上に表記します。

自分なりのメモなので、間違いや矛盾があるかもしれません。
もし見つけていただいた方がいらっしゃいましたら、Issueにぶち込んで頂けるとありがたいです。

また、このREADME.mdは`src/`内のファイルを結合して生成しています。

### Common Terms
#### Base
基本的な言語。

#### Meta
コンパイルすることでBase Languageを書き出して利用する言語。

### Index

<!-- toc -->

- [Web front-end](#web-front-end)
  * [Hyper Text Markup Language](#hyper-text-markup-language)
    + [Base](#base)
      - [HTML5](#html5)
    + [Meta](#meta)
      - [Pug(Jade)](#pugjade)
      - [Haml](#haml)
  * [Style Sheet](#style-sheet)
    + [Base](#base-1)
      - [CSS3](#css3)
    + [Meta](#meta-1)
      - [Sass](#sass)
      - [SCSS](#scss)
    + [Reset](#reset)
    + [Framework / Package](#framework--package)
      - [Bootstrap](#bootstrap)
      - [formbase](#formbase)
    + [Naming convention / Design agreement](#naming-convention--design-agreement)
      - [BEM](#bem)
  * [Script](#script)
    + [Base](#base-2)
      - [JavaScript(ES5)](#javascriptes5)
    + [Meta](#meta-2)
      - [JavaScript(ES6/ES2015)](#javascriptes6es2015)
      - [Typescript](#typescript)
      - [CoffeeScript](#coffeescript)
  * [Development assistance node module](#development-assistance-node-module)
    + [Basic](#basic)
      - [package.json](#packagejson)
    + [Package Management](#package-management)
      - [Yarn](#yarn)
      - [npm](#npm)
        * [npmjs.com](#npmjscom)
    + [Task Runner](#task-runner)
      - [Gulp](#gulp)
        * [gulp-concat](#gulp-concat)
        * [gulp-markdown-toc](#gulp-markdown-toc)
      - [Grunt](#grunt)
    + [Module Bundler](#module-bundler)
      - [Parcel](#parcel)
      - [Webpack](#webpack)
    + [Converter](#converter)
      - [pug](#pug)
      - [node-sass](#node-sass)
      - [babel](#babel)
    + [Linter](#linter)
      - [ESLint](#eslint)
  * [Library node module](#library-node-module)
    + [Framework](#framework)
      - [Nuxt](#nuxt)
      - [Vue.js](#vuejs)
        * [vue-cli](#vue-cli)
      - [Hyperapp](#hyperapp)
      - [jQuery](#jquery)
    + [Simple library](#simple-library)
      - [Tone.js](#tonejs)
      - [Puressure.js](#puressurejs)
      - [CodeMirror](#codemirror)
      - [Foxholder](#foxholder)
      - [marked](#marked)
        * [markdown](#markdown)
      - [Highlight.js](#highlightjs)
      - [validatorjs](#validatorjs)
      - [meu](#meu)
- [Web back-end](#web-back-end)
  * [Ruby](#ruby)
    + [Rails on Ruby](#rails-on-ruby)
  * [PHP](#php)
    + [Wordpress](#wordpress)
      - [Advanced Custom Fields](#advanced-custom-fields)
    + [Drupal](#drupal)
    + [MovableType](#movabletype)
  * [Node.js](#nodejs)
    + [Sails](#sails)
  * [Web Deploy Service](#web-deploy-service)
    + [ngrok](#ngrok)
  * [Web Audit](#web-audit)
    + [Lighthouse](#lighthouse)
- [Other Programming Language / Framework](#other-programming-language--framework)
- [Document](#document)
  * [Useful](#useful)
      - [Markdown](#markdown)
        * [Pandoc](#pandoc)
  * [Article, Magazine](#article-magazine)
      - [ReVIEW](#review)
      - [LaTeX](#latex)
  * [Presentation](#presentation)
      - [Reveal.js](#revealjs)
- [Version Management](#version-management)
  * [Basic](#basic-1)
    + [Git](#git)
  * [Web Service for Git](#web-service-for-git)
    + [GitHub](#github)
      - [ghi](#ghi)
      - [git-open](#git-open)
      - [gitignore](#gitignore)
    + [GitBuckets](#gitbuckets)
- [Text Editor](#text-editor)
  * [Atom](#atom)
  * [Sublime Text](#sublime-text)
  * [VSCode](#vscode)
- [Shell](#shell)
  * [fish](#fish)
  * [bash](#bash)
  * [zsh](#zsh)
- [til](#til)

<!-- tocstop -->

---

# Web front-end
## Hyper Text Markup Language
### Base
#### HTML5
最低限必要なファイル形式。
HTML5になってから様々なタグが追加され、同時にタグの推奨する省略規約が変更になった。

### Meta
#### Pug(Jade)
Node.js系のHTMLメタ言語。
インデントでタグの階層を表記する。
テンプレートエンジンとして用いて静的ファイルを書き出せる。

#### Haml
Ruby系のHTMLメタ言語。
インデントでタグの階層を表記し、タグには`%`をつけて表記する。
Rubyのコードを埋め込むことが出来る。
テンプレートエンジンとして用いる場合動的ファイルとしてレンダリングされることが多い。

## Style Sheet
### Base
#### CSS3
スタイルシートの最も基本的記法。

### Meta

#### Sass
タグの階層をインデントで表記する。
タグのネスト（階層重複）やMixin（関数）、変数、Extend（クラス化）などを行える。
Mixinの表記は定義を`=`、展開を`+`と省略できる。
- [css2sass | Convert CSS Snippets to Syntactically Awesome StyleSheets code](http://css2sass.herokuapp.com/)
  - CSSからSass, SCSSに変換できる。

#### SCSS
CSSの記法をほぼそのままに、Sassと同じことが直感的にできる。
CSSのコードをそのまま使うことも出来るため、初期学習コストはほぼ0。

### Reset
ブラウザの初期CSSをかき消すために用いられる。

### Framework / Package
#### Bootstrap
歴史のあるCSSフレームワーク。
Webサイトというより、Webアプリケーションを作成する際に使いやすい。

#### formbase
フォーム要素に改善されたデフォルト要素をもたらすパッケージ。

### Naming convention / Design agreement
#### BEM
クラスの命名規則。
Block-Element_Modifierとして記述する。

## Script
### Base
#### JavaScript(ES5)
どの端末でも動くJavaScript形式。
クラス定義を`prototype`を用いるなどの特徴有り。
特性上`json`形式を扱うのが得意。

### Meta
#### JavaScript(ES6/ES2015)
より保守性を高めたJS。
`const`と`let`で変数を管理したり、`Class`宣言や`=>`記法によるfunctionの省略記法などがある。
- ![myqiita](https://img.shields.io/badge/my-Qiita-brightgreen.svg) [setTimeoutしようとしたらハマったのでメモ - Qiita](https://qiita.com/sKawashima/items/8398820eed974da60846)

#### Typescript
JavaScriptにて行われてこなかった厳格的型宣言を行うことで保守性を高めようとしている。
ただし、開発者の負担が高まる。

#### CoffeeScript
Ruby系メタ言語。
使ったことはまだ無い。

## Development assistance node module
### Basic
#### package.json
プロジェクトで扱うモジュールを記録するためのファイル。
すなわち、プロジェクトにおける依存モジュールを列挙する。
また、npmjs.comでモジュールを公開する際は`data` `repository` `bin` などのパラメータを自分で

### Package Management
package.jsonから必要なモジュールを判断しオンライン上からダウンロードして環境を整えたり、package.jsonを編集したりすることができるツール。

#### Yarn
NPMよりも高速であり、依存関係をより確実に管理できるパッケージマネージャー。

#### npm
JavaScriptのための Package Manager。
Node.jsをインストールするとついてくる。
NPMネットワークから各種モジュールパッケージをダウンロード、管理できる。

##### [npmjs.com](npmjs.com)
npmの公式サイト。
モジュールの検索や公開等ができる。
モジュールの公開にはアカウント登録が必要。

### Task Runner
Node.js系の直接コードに影響しないモジュールを自動で実行したりするために用いるツール。

#### Gulp
シンプルにコードを選出（`src`）し、モジュールを通す（`.pipe`）することができる。
はじめはおすすめ。

##### [gulp-concat](https://www.npmjs.com/package/gulp-concat)
ファイルを単純に結合する。
読み込んだファイル群を`concat(output.file)`するだけで結合できる。
このリポジトリでも乱用中。

##### [gulp-markdown-toc](https://www.npmjs.com/package/gulp-markdown-toc)
Markdownにおける目次`TOC`を生成する。
`toc()`するとMarkdown内の指定タグ部分に目次が生成される。
このリポジトリでも乱用中。

#### Grunt
古い。
Gulpよりも遅い。
Reveal.jsにて利用した。

### Module Bundler
様々なモジュールを最低限のコードにまとめることでファイル数と容量を圧縮するツール。
極論、このツールを持ち入り始めるとソースコード全てがメタ言語的扱いになる。
様々なモジュールを有効活用したり、ファイル容量を圧縮するために用いる。

#### Parcel
突如出現し新時代を垣間見せた化物。
設定ファイルを必要せず、自動的にバンドルするファイルを選出する。
ただし、ファイル名は自動で複雑な文字列になるため、複数ページが有りアドレスを考慮するサイトでは非推奨。
Adobeの人達が作っている。
- [webpack時代の終わりとparcel時代のはじまり - Qiita](https://qiita.com/bitrinjani/items/b08876e0a2618745f54a)
- [parcel魅力的です - Qiita](https://qiita.com/damacchi/items/f595eef8dcbce45822ee)

#### Webpack
大正義。
やたら流行っている。
`webpack-dev-server`がモジュールバンドラーの役割をこなすことも有り、非常に便利。
最近その光景である`webpack-server`が登場しつつある。

### Converter
#### pug
Pug->HTML変換器。

#### node-sass
Sass/SCSS->CSS変換器。

#### babel
JavaScriptにおけるes2015->es5変換器。
もともと6to5という名前だったが2015年に改名した。

### Linter
コードの静的評価ができる。
きれいにコードを書くために叱ってくれる。

#### ESLint
設定の自由度が高く、テンプレートが非常に多く存在するLinter。
JSXをサポートしているなど、多機能。

## Library node module

### Framework
- [まだまだ進化中！JavaScriptフレームワークのトレンド | geechs magazine](https://geechs-magazine.com/tag/tech/20170427_1)

#### Nuxt
Vue.jsを拡張させたフレームワーク。
Webpackが必須。
`Vue Router`をファイルの配置に伴い自動生成したり、サーバーレスな静的ファイルの書き出しを行えたり、サーバーサイドを記述できたりする。

#### Vue.js
簡単に入力変数と表示を連結させることができるMVVMフレームワーク。
パーツごとにMarkup, Style, Scriptの全てを記述してコンポーネント化する`Vue Components`や、
SPA（Single-Page App）開発のためにアドレスと表示を連結させる`Vue Router`がある。
- [Vueでつくったマークダウンエディタ](https://github.com/sKawashima/markdown-editor_180314)

##### vue-cli
Vue.jsの開発環境テンプレートが簡単にDLできるコマンドツール。

#### Hyperapp
簡単に入力変数と表示を連結させることができるMVVMフレームワーク。
ただし、Vue.jsと違い非常に機能がシンプルで軽量。
また、記述するコードも非常に少なく済む。
- ![myqiita](https://img.shields.io/badge/my-Qiita-brightgreen.svg) [[解説]Parcel+Hyperappでマークダウンエディタを作る[JS] - Qiita](https://qiita.com/sKawashima/items/ac8fad15b714d91b41f9)（自作記事）
- [2018 年は Hyperapp の年だ - Qiita](https://qiita.com/JorgeBucaran/items/c48446babe0627e25ee6)

#### jQuery
古くからある省略記法的フレームワーク。
`$`を用いて何でも書けるようになる。
ただし、モダン環境（モジュールバンドラなどを用いる環境）では`import`の仕方に注意が必要。

### Simple library
#### Tone.js
Web Audio APIを簡単に扱うためのモジュール。
簡単便利ありがとう。

#### Puressure.js
一部端末で感圧センサの数値を利用できるモジュール。

#### [CodeMirror](https://codemirror.net/)
それっぽいコードエディタを実装するライブラリ。
エディタにおける行番号の表示やアクティブな行の表現のため、エディタ画面をdivの列挙で実装する。
valueの取得方法などはまだ分かっていない。

#### [Foxholder](http://foxholder.fox-hover.co.uk/)
フォームがActiveな場合それを強調するためのアニメーションを追加したりするためのモジュール。

#### [marked](https://www.npmjs.com/package/marked)
MarkdownをHTMLに変換するための便利マン。
- 以下の[Highlight.js](#Highlightjs)との連携でハマった際は[こう](https://github.com/sKawashima/markdown-editor_180314/pull/4)対処した。

##### [markdown](https://www.npmjs.com/package/markdown)
[marked](#marked)と同じだと思って使ってみたら、importが面倒な上表が描写できない。
二度と使うな。

#### [Highlight.js](https://highlightjs.org/)
コードにカラーハイライトシンタックスを与えるライブラリ。
JS側がクラスを付加し、CSSでスタイルを指定する。
初期からどっさりCSSテンプレートが含まれているので、そのまま使うなり編集して使うなり自由度が高い。

#### [validatorjs](https://github.com/skaterdav85/validatorjs)
フォームのバリデーションを行うライブラリ。
~~公式が日本語訳の設定を充実させている。~~
~~`import`で読み込んだ際は、`src/lang`が読み込まれず日本語訳を表示できないため、~~
```JavaScript
/* import Validator from 'validatorjs'
import ja from 'validatorjs/src/lang/ja' // これが必要

Validator.useLang('ja')
Validator.setMessages('ja', ja) // これが必要 */
```
~~のように表記する必要がある。~~

20180324現在、import/requireともに正常に動作しない。そもそも、なんでmainで`src/`を取っているのか等、謎が多い。

#### [meu](https://www.npmjs.com/package/meu)
![mymodule](https://img.shields.io/badge/my-module-brightgreen.svg) 文字を引数にとって実行すると語尾に「めう！」を付けるだけのネタモジュール。

# Web back-end
## Ruby
イマドキな記法でサーバーサイドが書ける。
API作成などに用いた。
データベース連携の際はSQliteが良く用いられる。
- ![myqiita](https://img.shields.io/badge/my-Qiita-brightgreen.svg) [XSERVERでCGI/APIを走らせて500エラーが出たときに確認すること - Qiita](https://qiita.com/sKawashima/items/9c045eadf48071ebf6a2)

### Rails on Ruby
Rubyを用いた開発において、データベースの管理や最低限のコード郡を自動的に生成したりできるフレームワーク。
特に、勝手にデータベースを設計してくれるさまは感動的。
思想としてMVC（Model-View-Controller）が用いられる。
- [Vue.jsとRailsでTODOアプリのチュートリアルみたいなものを作ってみた](https://qiita.com/naoki85/items/51a8b0f2cbf949d08b11)
- ![myqiita](https://img.shields.io/badge/my-Qiita-brightgreen.svg) [Ruby on Rails 学習メモ的チートシート - Qiita](https://qiita.com/sKawashima/items/41c3eca67f925d627f59)

## PHP
HTMLを拡張するような形で動的サイトを記述できる。
早い。
らしい。
データベース連携の際はMySQLが良く用いられる。

### Wordpress
大正義にして王道。
管理画面を持ち様々なサイトを作れるフレームワークCMSの1つ。
編集が簡単なのと、非常に出回っているためドキュメントが豊富。

#### [Advanced Custom Fields](https://ja.wordpress.org/plugins/advanced-custom-fields/)
入力画面を拡張できるプラグイン。
有料版で手に入るRepeatFieldが非常に便利なため、ライセンス所持を購入した。

### Drupal
Wordpressに比べて拡張性がものっそい広いCMS。
ただし、難しいのとドキュメントが見つからず挫折。

### MovableType
標準機能として静的ファイルの書き出しが行えるCMS。
使ったことはない。

## Node.js
JavaScript記法で書けるサーバー言語。
データベースはおもにMongoDBが良く用いられる。

### [Sails](https://sailsjs.com/)
RailsをNode.jsベースで再現したようなフレームワーク。
MVCベースではあるが、ModelとControllerを`api`としてまとめて管理している特徴がある。
ただし、Gruntを使ってたり更新頻度が低かったりとあんまりメジャーになりそうな雰囲気は少ない。

## Web Deploy Service
### ngrok
建っているローカルサーバーにグローバルアドレスを当てることができるサービス。
マインクラフトサーバー「[TSURAIMEU Server](https://skawashima.github.io/mcServer1803/)」はこれで公開している。

## Web Audit
### Lighthouse
Webサイト、Webアプリについて様々な監査ができる。
Node.jsモジュールも存在するが、Chrome拡張機能から実行できるのでこちらで十分。

# Other Programming Language / Framework

# Document
そのものに機能的な要素がないテキストベースドキュメントのための環境。

## Useful
#### Markdown
シンプルでテキストファイルでも見やすいマークアップ形式。
様々な書き出しのためのツールが存在する。
- [GugoDoc - 複数ファイルをサポートしたMarkdown to HTMLジェネレータ MOONGIFT](https://www.moongift.jp/2014/02/gugodoc-%E8%A4%87%E6%95%B0%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%97%E3%81%9Fmarkdown-to-html%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF/)

##### Pandoc
MarkdownをPDF化したり、自動で目次生成をしたりする。
つよい。

## Article, Magazine
#### ReVIEW
LaTeXのフロントエンド。
技術書を書くのに使えそう。

#### LaTeX
論文御用達のややこしい言語。
覚える気にならないのが不思議。

## Presentation
#### Reveal.js
HTMLやMarkdownでプレゼンテーションをするためのフレームワーク。
プレゼン資料制作の大幅な時間短縮が見込める。
Node.js系で、Gruntで動く。

# Version Management
## Basic
### Git
王道バージョン管理ツール。
試し開発のためにフォルダをコピーとか、開発履歴確認とかに用いる。

## Web Service for Git
### GitHub
Gitを共有し強化するためのWebサービス。
IssueやPullRequestが良い。
学生会員であればPrivateリポジトリ作り放題。

#### [ghi](https://github.com/stephencelis/ghi)
GitHubのIssueをCLIで操作できるようにするためのツール。
どちゃくそべんり。

#### [git-open](https://github.com/paulirish/git-open)
ターミナルから`git open`するだけでGitHubのWebサイトの該当ページを開いてくれる強者。
べんり。

#### [gitignore](https://www.gitignore.io/)
`.gitignore`のテンプレートをコマンド１つで[gitignore.io](https://www.gitignore.io/)からDLできる。

### GitBuckets
Privateリポジトリが作り放題なGit共有・強化Webサービス。
使ったことはない。


# Text Editor
宗教。

## Atom
GitHub製テキストエディタ。
行間がいい感じ。
`apm`コマンドが神。

## Sublime Text
非常にシンプルなテキストエディタ。
使うためにはなんでも設定しなければならない。
大変。

## VSCode
出現直後からやたら評価されたテキストエディタ。
カスタマイズなしでなんでもできる。
ただし、行間が狭い気がする。

# Shell
## fish
あたらしくTabがつよい。
ただし、あまり強みは利用できてない（慣れてない）。

## bash
Mac標準の`Basic Shell`。

## zsh
インターンで知った強いShell。
ただし、使おうとしたらより新しいfishを見つけてしまい二度と触ることがなさそう。



# til
Today I Learned
- ![myqiita](https://img.shields.io/badge/my-Qiita-brightgreen.svg) [sKawashima - Qiita](https://qiita.com/sKawashima)
---
© 2018 sKawashima
