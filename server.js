const express = require('express');
const app = express();

app.get('/resource', (req, res) => {
    // Cache-Controlヘッダーを設定してキャッシュを無効化
    res.set('Cache-Control', 'no-cache'); // 1秒後にキャッシュを無効化
    res.send(`Resource fetched at: ${new Date().toISOString()}`);
    console.log('not cache');
});

// 静的ファイルを提供
app.use(express.static('public'));

// サーバーを起動
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});