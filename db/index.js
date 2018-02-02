const { Pool } = require('pg');
const { user, host, database, password, port } = require('../secrets/db_config');
const pool = new Pool({ user, host, database, password, port });


module.exports = pool;