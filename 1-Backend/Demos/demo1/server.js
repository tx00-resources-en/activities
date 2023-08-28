const express = require('express');
const app = express();
const port = 3004;


// const myFunction = function (req, res) {
//   const data = {
//     message: 'Hello, this is a simple Express app!',
//     timestamp: new Date()
//   };
  
//   res.json(data);
// }


app.get('/new-path2', (req, response) =>{
  const data = {
    message: 'Hello, this is a simple Express app!',
    timestamp: new Date()
  };
  
  response.json(data);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
