const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint 1
app.get('/endpoint1', (req, res) => {
  res.send('This is the first endpoint.');
});

// GET endpoint 2
app.get('/endpoint2', (req, res) => {
  res.send('This is the second endpoint.');
});

// Error handling middleware for 404 Not Found
app.use((req, res, next) => {
  res.status(404).send("Sorry, the requested page couldn't be found.");
});

// Error handling middleware for other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong on the server.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
