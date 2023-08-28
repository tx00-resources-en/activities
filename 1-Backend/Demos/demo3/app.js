   // app.js
   const express = require('express');
   const path = require('path');

   const app = express();
   const PORT = 3001;

   app.use(express.static('public'));

   // GET /route1
   // POST /route1
   // DELETE /route1 
   app.get('/route 1', (req, res) => {
     res.send('This is the first endpoint.');
   });

   app.get('/endpoint2', (req, res) => {
     res.send('This is the second endpoint.');
   });

   const notFoundCb = (req, res, next) => {
    res.status(404).send("Sorry, the requested page couldn't be found.");
  }
   app.use(notFoundCb);

   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send('Something went wrong on the server.');
   });

   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });