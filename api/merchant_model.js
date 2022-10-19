const Pool = require('pg').Pool
const pool = new Pool({
    user: 'instep',
    host: 'localhost',
    database: 'web',
    password: 'root',
    port: 5432,
});