// tweetController.js
const tweets = [];

exports.getAllTweets = (req, res) => {
    res.json(tweets);
};

exports.createTweet = (req, res) => {
    const { text } = req.body;
    const newTweet = {
        id: tweets.length + 1,
        text,
        createdAt: new Date()
    };
    tweets.push(newTweet);
    res.status(201).json(newTweet);
};

exports.getTweetById = (req, res) => {
    const { id } = req.params;
    const tweet = tweets.find(tweet => tweet.id === parseInt(id));
    if (tweet) {
        res.json(tweet);
    } else {
        res.status(404).json({ message: 'Tweet not found' });
    }
};

exports.updateTweet = (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const tweet = tweets.find(tweet => tweet.id === parseInt(id));
    if (tweet) {
        tweet.text = text;
        res.json(tweet);
    } else {
        res.status(404).json({ message: 'Tweet not found' });
    }
};

exports.deleteTweet = (req, res) => {
    const { id } = req.params;
    const index = tweets.findIndex(tweet => tweet.id === parseInt(id));
    if (index !== -1) {
        tweets.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Tweet not found' });
    }
};
