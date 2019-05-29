const pgp = require('pg-promise')({
    query: e => {

    }
});

const options = {
    host: 'localhost',
    database: 'hero-quest'
};

const db = pgp(options);
module.exports = db;