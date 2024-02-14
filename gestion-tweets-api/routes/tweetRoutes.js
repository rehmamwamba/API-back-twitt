const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Assurez-vous que le chemin vers le middleware est correct

router.post('/tweets', authMiddleware, async (req, res) => {
    const { content } = req.body;
    const userId = req.user && req.user.userId; // Utilisateur connecté
  
    try {
      const newTweet = await Tweet.create({ content, userId });
      res.status(201).json(newTweet);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  


  module.exports = router;
