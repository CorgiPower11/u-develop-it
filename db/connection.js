const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'r#SG1&mL_50m',
        database: 'election'
    },
    console.log('Connect to the election database.')
);

module.exports = db;