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

##### [gulp-concat](https://www.npmjs.com/package/gulp-concat)
ファイルを単純に結合する。
`src`して読み込んだファイル群を`.pipe(concat(output.file))`するだけで結合できる。
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