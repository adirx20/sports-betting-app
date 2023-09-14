// imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// middlewares
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect('mongoose://localhost/sports-betting-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// routes
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});