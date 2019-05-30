const pgp = require('pg-promise')({
    query: e => console.log(e.query)
});

const options = {
    host: 'localhost',
    database: 'hero-quest'
};

const db = pgp(options);
module.exports = db;