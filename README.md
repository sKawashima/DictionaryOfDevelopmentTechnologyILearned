# sKawashimaの開発技術学習目録
 ![maker](https://img.shields.io/badge/maker-sKawashima-4e1a68.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/sKawashima/DictionaryOfDevelopmentTechnologyILearned.svg)


自分が調べた・調べたい技術関連の情報をまとめます。
各ジャンルごとに、使用頻度が高いものを上に表記します。

- [ ] とりあえず思いつくだけ書き出す <-ｲﾏｺｺ
- [ ] 書き出した内容を整理する

### Common Terms
#### Base
基本的な言語。

#### Meta
コンパイルすることでBase Languageを書き出して利用する言語。

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
#### Javascript(ES5)
どの端末でも動くJavascript形式。
クラス定義を`prototype`を用いるなどの特徴有り。
特性上`json`形式を扱うのが得意。

### Meta
#### Javascript(ES6/ES2015)
より保守性を高めたJS。
`const`と`let`で変数を管理したり、`Class`宣言や`=>`記法によるfunctionの省略記法などがある。

#### Typescript
Javascriptにて行われてこなかった厳格的型宣言を行うことで保守性を高めようとしている。
ただし、開発者の負担が高まる。

#### CoffeeScript ![自信弱](https://img.shields.io/badge/%E8%87%AA%E4%BF%A1-%E5%BC%B1-lightgrey.svg)
Ruby系メタ言語。

## Script Module
### Package Management
#### Yarn
NPMよりも高速であり、依存関係をより確実に管理できるパッケージマネージャー。

#### NPM
Node Package Manager。
Node.jsをインストールするとついてくる。
NPMネットワークから各種モジュールパッケージをダウンロード、管理できる。

### Task Runner
Node.js系の直接コードに影響しないモジュールを自動で実行したりするために用いるツール。

#### Gulp
シンプルにコードを選出（`src`）し、モジュールを通す（`.pipe`）することができる。
はじめはおすすめ。

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

#### Hyperapp
簡単に入力変数と表示を連結させることができるMVVMフレームワーク。
ただし、Vue.jsと違い非常に機能がシンプルで軽量。
また、記述するコードも非常に少なく済む。
- [2018 年は Hyperapp の年だ - Qiita](https://qiita.com/JorgeBucaran/items/c48446babe0627e25ee6)

#### jQuery
古くからある省略記法的フレームワーク。
`$`を用いて何でも書けるようになる。
ただし、モダン環境（モジュールバンドラなどを用いる環境）では`import`の仕方に注意が必要。

#### Reveal.js
HTMLやMarkdownでプレゼンテーションをするためのフレームワーク。
プレゼン資料制作の大幅な時間短縮が見込める。

### Modules / Package(simple)
#### Tone.js
Web Audio APIを簡単に扱うためのモジュール。
簡単便利ありがとう。

#### Puressure.js
一部端末で感圧センサの数値を利用できるモジュール。

#### [Foxholder](http://foxholder.fox-hover.co.uk/)
フォームがActiveな場合それを強調するためのアニメーションを追加したりするためのモジュール。

### Node_Modules
#### ESLint
コードの静的評価ができる。
きれいにコードを書くために叱ってくれる。

#### babel
Javascriptの変換機。
ちゃんと調べて使ったことはない。

## Other
- [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)
  - どの環境でどの技術が使えるかを調べることが出来る。

# Web back-end
## Ruby
イマドキな記法でサーバーサイドが書ける。
API作成などに用いた。
データベース連携の際はSQliteが良く用いられる。

### Rails on Ruby
Rubyを用いた開発において、データベースの管理や最低限のコード郡を自動的に生成したりできるフレームワーク。
特に、勝手にデータベースを設計してくれるさまは感動的。
思想としてMVC（Model-View-Controller）が用いられる。
- [Vue.jsとRailsでTODOアプリのチュートリアルみたいなものを作ってみた](https://qiita.com/naoki85/items/51a8b0f2cbf949d08b11)

## PHP
HTMLを拡張するような形で動的サイトを記述できる。
早い。
らしい。
データベース連携の際はMySQLが良く用いられる。

### Wordpress
大正義にして王道。
管理画面を持ち様々なサイトを作れるフレームワークCMSの1つ。
編集が簡単なのと、非常に出回っているためドキュメントが豊富。

### Drupal
Wordpressに比べて拡張性がものっそい広いCMS。
ただし、難しいのとドキュメントが見つからず挫折。

### MovableType
標準機能として静的ファイルの書き出しが行えるCMS。
使ったことはない。

## Node.js
Javascript記法で書けるサーバー言語。
データベースはおもにMongoDBが良く用いられる。

### [Sails](https://sailsjs.com/)
RailsをNode.jsベースで再現したようなフレームワーク。
MVCベースではあるが、ModelとControllerを`api`としてまとめて管理している特徴がある。
ただし、Gruntを使ってたり更新頻度が低かったりとあんまりメジャーになりそうな雰囲気は少ない。

# Web Deploy Service

# Document
そのものに機能的な要素がないテキストベースドキュメント。
#### Markdown
シンプルでテキストファイルでも見やすいマークアップ形式。
様々な書き出しのためのツールが存在する。
- [GugoDoc - 複数ファイルをサポートしたMarkdown to HTMLジェネレータ MOONGIFT](https://www.moongift.jp/2014/02/gugodoc-%E8%A4%87%E6%95%B0%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%97%E3%81%9Fmarkdown-to-html%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF/)

#### ReVIEW
LaTeXのフロントエンド。
技術書を書くのに使えそう。

#### LaTeX
論文御用達のややこしい言語。
覚える気にならないのが不思議。

#### Pandoc
MarkdownをPDF化したり、自動で目次生成をしたりする。
つよい。

# Version Management
#### Git
王道バージョン管理ツール。
試し開発のためにフォルダをコピーとか、開発履歴確認とかに用いる。

#### GitHub
Gitを共有し強化するためのWebサービス。
IssueやPullRequestが良い。
学生会員であればPrivateリポジトリ作り放題。

#### [ghi](https://github.com/stephencelis/ghi)
GitHubのIssueをCLIで操作できるようにするためのツール。

#### GitBuckets
Privateリポジトリが作り放題なGit共有・強化Webサービス。

# Other Programming Language / Framework

# Code Test Service

# Shell
#### fish
あたらしくTabがつよい。
ただし、あまり強みは利用できてない（慣れてない）。

#### bash
Mac標準の`Basic Shell`。

#### zsh
インターンで知った強いShell。
ただし、使おうとしたらより新しいfishを見つけてしまい二度と触ることがなさそう。

# Text Editor
宗教。

#### Atom
GitHub製テキストエディタ。
行間がいい感じ。
`apm`コマンドが神。

#### Sublime Text
非常にシンプルなテキストエディタ。
使うためにはなんでも設定しなければならない。
大変。

#### VSCode
出現直後からやたら評価されたテキストエディタ。
カスタマイズなしでなんでもできる。
ただし、行間が狭い気がする。
