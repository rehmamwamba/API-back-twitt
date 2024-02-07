// Importation des dépendances
const express = require('express');
const app = express();
const port = 3000;

// Routes pour les opérations CRUD sur les tweets
app.get('/tweets', (req, res) => {
  // Logique pour récupérer tous les tweets
  res.send('Liste des tweets');
});

app.post('/tweets', (req, res) => {
  // Logique pour créer un nouveau tweet
  res.send('Nouveau tweet créé');
});

app.put('/tweets/:id', (req, res) => {
  // Logique pour mettre à jour un tweet
  res.send(`Tweet ${req.params.id} mis à jour`);
});

app.delete('/tweets/:id', (req, res) => {
  // Logique pour supprimer un tweet
  res.send(`Tweet ${req.params.id} supprimé`);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
