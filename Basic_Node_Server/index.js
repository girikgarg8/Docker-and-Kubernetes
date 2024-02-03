const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    return res.json({ message: 'OK' });
})

app.listen(3000, () => {
    console.log('Started the server');
})