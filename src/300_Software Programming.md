# Software Programming
## Node.js
JavaScript記法で様々な開発ができる開発環境。ライブラリが豊富かつ検索環境も整っている。UIをWebで実装出来るため、基本的にここではUIを持つためのアプリケーション開発環境である[Electron](Electron)とその他CLI開発補助node moduleを記載する。

### [Electron](https://electronjs.org/)
WebページをそのままGUIとしてアプリケーションを制作することができるフレームワーク。
テキストエディタのAtomやVSCodeなどはこれで作られている。
Mac, Windows, Linuxのそれぞれのためのアプリケーションで出力することができる。

### [NW.js](https://nwjs.io/)
ウィンドウ管理を簡略化したElectronのようなフレームワーク。
HTMLファイル側にNode.jsの実装を記載でき、使いやすそう。

- [NW.jsでデスクトップアプリの夢を見る！ - Qiita](https://qiita.com/Minimum-Opus/items/b28b528a9c34ad21599e)


### [Vue Native](https://vue-native.io/)
Vueを使ったネイティブアプリ開発環境。
様々な開発環境が簡単に揃う。
React Nativeへの対抗かつ、優秀。

### [Nativefier](https://github.com/jiahaog/nativefier)
既存WebサイトをElectronネイティブアプリ化するためのCLIツール。
一行のコマンドで制作できてしまうことが非常に便利。

### CLI開発補助node module
#### clear
ターミナルコマンドの`clear`と同等の動作をする関数`clear()`を追加するモジュール。

#### [chalk](https://www.npmjs.com/package/chalk)
チョーク。CLIにおける文字の表示色や背景色を簡単に変更することが出来る関数を追加するモジュール。
