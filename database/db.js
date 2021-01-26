const keys = require('../keys')
const mysql = require('mysql2')

const pool = mysql.createPool(keys.database)

module.exports = pool.promise();