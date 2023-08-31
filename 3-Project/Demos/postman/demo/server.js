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

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

app.post('/api/notes', (req, res) => {
  const { content, important } = req.body;
  const newNote = {
    id: notes.length + 1,
    content,
    important,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { content, important } = req.body;
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex !== -1) {
    notes[noteIndex] = {
      id,
      content,
      important,
    };
    res.json(notes[noteIndex]);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

app.patch('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { content, important } = req.body;
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex !== -1) {
    const updatedNote = { ...notes[noteIndex], content, important };
    notes[noteIndex] = updatedNote;
    res.json(updatedNote);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex !== -1) {
    const deletedNote = notes.splice(noteIndex, 1)[0];
    res.json(deletedNote);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
