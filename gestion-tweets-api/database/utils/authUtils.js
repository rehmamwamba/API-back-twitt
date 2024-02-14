const { Pool } = require('pg');

const pool = new Pool({
  user: 'votre_utilisateur',
  host: 'localhost',
  database: 'votre_base_de_données',
  password: 'votre_mot_de_passe',
  port: 5432,
});

module.exports = pool;
