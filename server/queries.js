const POOL = require('pg').Pool;

const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432
});

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
}