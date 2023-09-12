const connectDB = require('./config/db');
const express = require('express')
const blogRoutes = require('./routes/blogs')

// express app
const app = express()

const port=3001;

connectDB();

// middleware
app.use(express.json())


app.get('/', (req, res) => res.send('API Running!'));

// routes
app.use('/api/blogs', blogRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));