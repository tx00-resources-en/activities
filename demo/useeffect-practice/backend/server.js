require('dotenv').config()
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors')
const blogRoutes = require('./routes/blogs')
const customMiddleware = require('./middleware/customMiddleware');

// express app
const app = express()

const port=process.env.PORT || 3001;
connectDB();

// middleware
app.use(cors())
app.use(express.json())

app.use(customMiddleware.requestLogger);

app.get('/', (req, res) => res.send('API Running!'));

// server.get('/', function(req, res) {
//     res.status(200).json({ api: 'running' });
// });

// routes
app.use('/api/blogs', blogRoutes);

app.use(customMiddleware.unknownEndpoint);

app.use(customMiddleware.errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));