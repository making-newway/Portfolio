const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(serveStatic('public', { index: ['index.html', 'index.htm'] }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});