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
