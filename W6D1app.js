//const express = require('http')

//buat import package express yang tadi di install
const express = require('express');

//buat instance express
const app = express();
const PORT = 3000;

app.get('/',(req, res) => {
    res.send("Hallo dari Aplikasi Express JS")
})

app.listen(PORT, () => {
    console.log(`Aplikasi sudah berjalan pada http://localhost:${PORT}`)
})