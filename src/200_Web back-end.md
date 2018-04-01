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
