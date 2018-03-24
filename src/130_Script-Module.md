## Script Module
### Basic
#### package.json
プロジェクトで扱うモジュールを記録するためのファイル。
すなわち、プロジェクトにおける依存モジュールを列挙する。
また、npmjs.comでモジュールを公開する際は`data` `repository` `bin` などのパラメータを自分で設定する。

### Package Management
package.jsonから必要なモジュールを判断しオンライン上からダウンロードして環境を整えたり、package.jsonを編集したりすることができるツール。

#### Yarn
NPMよりも高速であり、依存関係をより確実に管理できるパッケージマネージャー。

#### npm
Javascriptのための Package Manager。
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
