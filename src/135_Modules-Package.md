### Modules / Package(simple)
#### Tone.js
Web Audio APIを簡単に扱うためのモジュール。
簡単便利ありがとう。

#### Puressure.js
一部端末で感圧センサの数値を利用できるモジュール。

#### [CodeMirror](https://codemirror.net/)
`textarea`をコードエディタぽくするライブラリ。
180314現在使ったことがない。

#### [Foxholder](http://foxholder.fox-hover.co.uk/)
フォームがActiveな場合それを強調するためのアニメーションを追加したりするためのモジュール。

#### [marked](https://www.npmjs.com/package/marked)
MarkdownをHTMLに変換するための便利マン。
- 以下の[Highlight.js](#Highlightjs)との連携でハマった際は[こう](https://github.com/sKawashima/markdown-editor_180314/pull/4)対処した。

#### [Highlight.js](https://highlightjs.org/)
コードにカラーハイライトシンタックスを与えるライブラリ。
JS側がクラスを付加し、CSSでスタイルを指定する。
初期からどっさりCSSテンプレートが含まれているので、そのまま使うなり編集して使うなり自由度が高い。

#### [markdown](https://www.npmjs.com/package/markdown)
上と同じだと思って使ってみたら、importが面倒な上表が描写できない。
二度と使うな。

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
