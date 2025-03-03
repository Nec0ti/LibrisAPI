require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const booksRoute = require('./routes/books');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const mongoDBUri = process.env.MONGODB_URI;

mongoose.connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Successfully connected to MongoDB'))
.catch(err => console.error('MangoDB Connection Error:', err));

app.use('/api/books', booksRoute);

app.get('/', (req, res) => {
  res.send('Welcome to LibrisAPI');
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});