const express = require('express');
const userRouter = require('./routers/users');
const itemRouter = require('./routers/items');
const app = express();
const port = 3001;

app.use(express.json());


// Configure user routes
app.use('/api/users', userRouter);
app.use('/api/items', itemRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});