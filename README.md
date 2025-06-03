# Hello World Web Application

シンプルな"Hello World"を表示するモダンなWebアプリケーション

## 技術スタック

- **フロントエンド**: React.js + TypeScript
- **バックエンド**: Express.js + Node.js
- **スタイリング**: Tailwind CSS + shadcn/ui
- **ルーティング**: Wouter
- **データ取得**: TanStack Query
- **ビルドツール**: Vite

## 機能

- レスポンシブデザイン
- ローディング状態とアニメーション
- ステータスインジケーター
- アプリケーション更新機能
- モダンなUIコンポーネント

## セットアップ

### 必要な環境
- Node.js 20以上
- npm

### インストールと起動

1. 依存関係のインストール
```bash
npm install
```

2. 開発サーバーの起動
```bash
npm run dev
```

アプリケーションは`http://localhost:5000`で利用できます。

## プロジェクト構成

```
├── client/                 # フロントエンドソース
│   ├── src/
│   │   ├── components/     # UIコンポーネント
│   │   ├── pages/          # ページコンポーネント
│   │   ├── lib/            # ユーティリティ
│   │   └── hooks/          # カスタムフック
│   └── index.html
├── server/                 # バックエンドソース
│   ├── index.ts           # サーバーエントリーポイント
│   ├── routes.ts          # APIルート
│   └── storage.ts         # データストレージ
├── shared/                # 共有スキーマ
└── package.json
```

## 開発

### スクリプト
- `npm run dev` - 開発サーバー起動
- `npm run build` - プロダクションビルド
- `npm run preview` - ビルド結果のプレビュー

### アーキテクチャ
- フロントエンドとバックエンドが同一ポートで動作
- ViteがHTMLとアセットを配信
- Expressがバックエンドルートを処理
- TypeScriptによる型安全性

## デプロイ

Replitの内蔵デプロイメント機能を使用してアプリケーションをデプロイできます。

1. Replitで「Deploy」ボタンをクリック
2. 設定を確認してデプロイを開始
3. `.replit.app`ドメインでアクセス可能

## ライセンス

MIT License