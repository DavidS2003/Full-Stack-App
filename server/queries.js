const POOL = require('pg').Pool;

const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432
});

const createLink = (req, res) => {
    const name = req.body.name;
    const url = req.body.URL;

    pool.query('INSERT INTO links (name, URL) VALUES ($1, $2)', [name, URL], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(201).send('Link added with ID: ${result.insertId}');
    })
}

const getLinks = (req, res) => {
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    })
}

module.exports = {
    getLinks,
    createLink,
}