const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});