// auth.js

const jwt = require('jsonwebtoken');

// Configuration des clés secrètes pour la création et la vérification des jetons JWT
const secretKey = 'your-secret-key'; // Remplacez par votre clé secrète

// Fonction pour générer un jeton JWT pour un utilisateur authentifié
function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Fonction pour vérifier et décoder un jeton JWT
function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error('Invalid token');
    }
}

module.exports = { generateToken, verifyToken };
