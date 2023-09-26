# Password Hashing with bcrypt

## Part 1/2

**Objective**

In this part, you will learn how to enhance the security of your Express API by implementing password hashing using the `bcrypt` library.

> You can this code as a starter:
```js
const express = require('express');
const app = express();
app.use(express.json());

// In-memory storage for user data 
// const users = [];
const users = [
  {username: "sami",password: "Strong#Password#"},
  {username: "rami",password: "Strong#Password#"},
];

// Endpoint for user registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already taken' });
  }


// Save the user data (in-memory storage for demonstration)
users.push({ username, password });

  res.status(201).json({ message: 'User registered successfully' });
});


app.get('/users', (req, res) => {
    const userInformation = users.map((user) => {
      return { username: user.username, password: user.password };
    });
  
    res.status(200).json(userInformation);
});
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```


**Task 1: Setup Express Project**

Install Express and `bcrypt` packages using `npm install express bcrypt`.

**Task 2: Create an Express API**

1. Create an Express application in a JavaScript file (e.g., `app.js`).
2. Set up a basic Express server that listens on a specific port (e.g., 3001).
3. Create a route to handle user registration (POST /register) with a username and password.

**Task 3: Implement Password Hashing**

1. Import the `bcrypt` library at the top of your `app.js` file.
2. Modify the user registration route to hash the user's password before saving it.
3. Store the hashed password in memory (for simplicity) along with the username.

**Task 4: Create a Login Route**

1. Create a new route for user login (POST /login).
2. Implement the login route to compare the hashed password with the provided password during login.

**Task 5: Test the API**

1. Use Postman to test your API's registration and login functionality.
2. Ensure that registration stores the hashed password, and login verifies passwords correctly.

## Part 2/2

Go through this [code](https://github.com/iamshaunjp/MERN-Auth-Tutorial/blob/lesson-14/backend/models/userModel.js)