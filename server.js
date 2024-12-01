const express = require('express');
const app = express();

app.get('/resource', (req, res) => {
    res.set('Cache-Control', 'no-cache');
    res.send(`Resource fetched at: ${new Date().toISOString()}`);
    console.log('not cache');
});

app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});