//https://github.com/fullstack-hy2020/part3-notes-backend/blob/part3-1/index.js
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  }, 
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', );

app.post('/api/notes', );

app.put('/api/notes/:id', );

app.patch('/api/notes/:id', );

app.delete('/api/notes/:id', );

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
