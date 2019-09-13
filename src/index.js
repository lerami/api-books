const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.argv[2] || 3000;

// Import routes
const books = require('./routes/books');

// Create the app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use routes
app.use('/books', books);

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}, waiting for requests...`);
  });