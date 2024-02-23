// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/tweets', tweetRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
