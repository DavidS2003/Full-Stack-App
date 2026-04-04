const express = require('express');

const app = express();

const path = require('path');

const db = require('./queries');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 9001;


app.use(express.static(path.resolve(__dirname, '../client/dist')));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

// app.get('/test', (req, res)=>(
// // do smt here
// ));

app.get('/links', db.getLinks);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});