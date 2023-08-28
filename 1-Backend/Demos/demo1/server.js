const express = require('express');
const app = express();
const port = 3001;


// const myFunction = function (req, res) {
//   const data = {
//     message: 'Hello, this is a simple Express app!',
//     timestamp: new Date()
//   };
  
//   res.json(data);
// }


app.get('/', (req, res) =>{
  const data = {
    message: 'Hello, this is a simple Express app!',
    timestamp: new Date()
  };
  
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
