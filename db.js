// db.js

const { Pool } = require('pg');

// Configuration de la connexion à la base de données PostgreSQL
const pool = new Pool({
    user: 'your-db-username', // Remplacez par le nom d'utilisateur de votre base de données
    host: 'localhost',
    database: 'your-db-name', // Remplacez par le nom de votre base de données
    password: 'your-db-password', // Remplacez par le mot de passe de votre base de données
    port: 5432,
});

module.exports = pool;
