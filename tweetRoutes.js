// tweetRoutes.js

const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

// Définition de la route GET pour récupérer tous les tweets
router.get('/tweets', tweetController.getAllTweets);

module.exports = router;
