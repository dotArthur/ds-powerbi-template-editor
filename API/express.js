const express = require('express');
const app = express();

app.get('/api/schema', (req, res) => {
    res.render("src\App.js",{ DATA: DATA });
});

app.listen(3000, () => {
  console.log('API läuft auf Port 3000');
});
