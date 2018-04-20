## Library node module

### Framework
- [まだまだ進化中！JavaScriptフレームワークのトレンド | geechs magazine](https://geechs-magazine.com/tag/tech/20170427_1)

#### Nuxt
Vue.jsを拡張させたフレームワーク。
Webpackが必須。
`Vue Router`をファイルの配置に伴い自動生成したり、サーバーレスな静的ファイルの書き出しを行えたり、サーバーサイドを記述できたりする。

##### @nuxtjs/pwa
NuxtでPWAを作るためのライブラリ。configファイルにmanifestを含む各パラメータを記述できるようになる。

##### create-nuxt-app
Nuxtの開発環境テンプレートDL用コマンドツール。

#### Vue.js
簡単に入力変数と表示を連結させることができるMVVMフレームワーク。
パーツごとにMarkup, Style, Scriptの全てを記述してコンポーネント化する`Vue Components`や、
SPA（Single-Page App）開発のためにアドレスと表示を連結させる`Vue Router`がある。
- [Vueでつくったマークダウンエディタ](https://github.com/sKawashima/markdown-editor_180314)

##### Vuex
Vue間のデータ共有のためのストアが実装できるフレームワーク。

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
#### Axios
シンプルな非同期通信モジュール。
Vueと組み合わせて幾つかのWebサイトで柔軟な表示を実装したり、メールフォームを実装したりした。
合わせてAPI実装ができれば基本的になんでもできる。

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

20180324現在、import/requireともに正常に動作しない。そもそも、なんでmainで`src/`を取っているのか等、謎が多い。動いていないのは僕の環境だけかもしれないが…

#### [meu](https://www.npmjs.com/package/meu)
![mymodule](https://img.shields.io/badge/my-module-brightgreen.svg) 文字を引数にとって実行すると語尾に「めう！」を付けるだけのネタモジュール。

#### [clipboard.js](https://clipboardjs.com/)
クリップボードに特定の要素を保存できるモジュール。
HTML要素に対して`new`すればクリップボードに入れる要素などはHTML側で書ける。

#### Rough.js
図形を手書きテイストに描写できるモジュール。
