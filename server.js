// app.js (ou server.js)

const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Routes d'authentification
app.use('/auth', authRoutes);

// Port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
