陸上部 練習メニュー管理・クラウドデータベース版

【データベース構成】
Firebase Authentication
- コーチのメールアドレス・パスワード認証

Cloud Firestore
- teams / athletics-club / state / main
  - menus: 登録メニュー一覧
  - days: 日付別練習一覧
  - updatedAt: 最終更新時刻
  - updatedBy: 最終更新コーチ

【Firebase側の設定】
1. Firebaseコンソールで新しいプロジェクトを作成
2. 「アプリを追加」からWebアプリを登録
3. 表示された firebaseConfig を firebase-config.js に貼り付け
4. Authentication → ログイン方法 → メール/パスワードを有効化
5. Firestore Databaseを作成
6. Firestoreの「ルール」に firestore.rules の内容を貼り付けて公開
7. index.html、firebase-config.jsを同じ場所に置いてWeb公開

【重要】
ローカルファイルとして直接開くより、GitHub PagesなどHTTPSのWebサイトで公開して使用してください。
Firebase未設定時は、自動的に従来の端末内保存で動作します。

【共有方法】
同じFirebaseプロジェクトにつないだページで各コーチがログインすると、
全員が同じメニュー・日別練習データをリアルタイムで閲覧・編集できます。

【現バージョンの権限】
ログインできるコーチは全員、閲覧・登録・編集・削除が可能です。
将来は管理者、編集者、閲覧専用の3権限に分けられます。
