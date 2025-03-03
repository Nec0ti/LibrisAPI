require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const booksRoute = require('./routes/books');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'You requested too much! PLEASE STOP!',
  standardHeaders: true,
	legacyHeaders: false,
});

app.use(limiter);

app.use(cors());
app.use(express.json());

const mongoDBUri = process.env.MONGODB_URI;

mongoose.connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Successfully connected to MangoDB!'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoute);
app.use('/api/books', booksRoute);
app.use('/api/users', usersRoute);

app.get('/', (req, res) => {
  res.send('Welcome to LibrisAPI. If you visit for the first time, you should want to read the documentation at <a>https://docs.librisapi.necoti.dev</a>');
});

app.listen(port, () => {
  console.log(`Server running on the ${port} port`);
});