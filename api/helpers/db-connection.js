const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information
const dbConfig = {
  ssl: { rejectUnauthorized: false },
  connectionString: process.env.HSDADBCONNECTIONSTRING
};

const pool = new Pool(dbConfig);

module.exports = {
  getConnection: () => {
    return pool;
  }
};