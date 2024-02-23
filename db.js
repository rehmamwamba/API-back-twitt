// config/database.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '"3300',
  user: 'mwamba',
  password: 'votre_mot_de_passe',
  database: 'mysql2'
});

module.exports = connection;
