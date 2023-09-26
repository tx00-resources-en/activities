# Lab: JWT

## Part 1/3:

This part demonstrates how to create, decode, and verify JSON Web Tokens (JWTs) using the `jsonwebtoken` library in JavaScript.

**Step 1: Setting Up Your Project**

1. Create a new folder for your project.
2. Open a terminal and navigate to your project folder.
3. Initialize a new Node.js project by running the following command:
```sh
npm init -y
```
4. Install the `jsonwebtoken` library by running: `npm install jsonwebtoken`

**Step 2: Create a JavaScript File**
1. Create a JavaScript file (e.g., `jwt_lab.js`) in your project folder.

**Step 3: Import the `jsonwebtoken` Library**
```javascript
const jwt = require('jsonwebtoken');
```

**Step 4: Creating and Signing a JWT**
```javascript
// Function to create and sign a JWT
function createJWT() {
  const payload = {
    userId: 123,
    username: 'exampleUser'
  };
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  console.log('JWT Token:', token);
}

// Call the function to create and sign a JWT
createJWT();
```

**Step 5: Decoding a JWT**
```javascript
// Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log('Decoded JWT:', decoded);
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtToken = 'yourTokenHere';

// Call the function to decode the JWT
decodeJWT(jwtToken);
```

**Step 6: Verifying a JWT**
```javascript
// Function to verify a JWT
function verifyJWT(token) {
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify = 'yourTokenHere';

// Call the function to verify the JWT
verifyJWT(jwtTokenToVerify);
```

**Step 7: Running the Lab**
1. Open your terminal and navigate to your project folder.
2. Run the lab by executing the JavaScript file:
```sh
node jwt_lab.js
```


## Part 2/3
---------

Go through this [code](https://github.com/iamshaunjp/MERN-Auth-Tutorial/blob/lesson-14/backend/middleware/requireAuth.js)



## Part 3/3 (At home): JWT Authentication in an Express.js API
----
**Step 1: Set Up Your Project**
1. Create a new directory for your project and navigate to it using your terminal.

```bash
mkdir express-jwt-mvc-lab
cd express-jwt-mvc-lab
```

2. Initialize a new Node.js project.

```bash
npm init -y
```

3. Install the required packages.

```bash
npm install express jsonwebtoken
```

4. Create the following directory structure for the MVC pattern:

```plaintext
express-jwt-mvc-lab/
│
├── controllers/
│   └── authController.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── authRoutes.js
│
├── index.js
├── config.js
```

**Step 2: Create Your Express.js Server**

```javascript
// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());


// Import routes
const authRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

**Step 3: Create the Model**

```javascript
// models/userModel.js
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Function to find a user by username and password
function findByUsernameAndPassword(username, password) {
  return users.find(user => user.username === username && user.password === password);
}

module.exports = { findByUsernameAndPassword };
```

**Step 4: Create the Controller**

```javascript
// controllers/authController.js
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const config = require('../config');

// Function to handle user login
async function login(req, res) {
  const { username, password } = req.body;
  const user = UserModel.findByUsernameAndPassword(username, password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id }, config.secretKey, { expiresIn: '1h' });

  res.json({ token });
}

module.exports = { login };
```

**Step 5: Create the Route**

```javascript
// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

router.post('/login', AuthController.login);

module.exports = router;
```

**Step 6: Configure Your Application**

Create a `config.js` file to store your secret key:

```javascript
// config.js
module.exports = {
  secretKey: 'mysecretkey',
};
```

**Step 7: Test with Postman**

1. Start your Express.js server by running `node index.js` in your terminal.

2. Open Postman and create a new request to test your endpoints.

**Login Request:**
- Set the request method to POST.
- Set the URL to `http://localhost:3001/auth/login`.
- In the Body tab, select `raw` and enter JSON data for user authentication:

```json
{
  "username": "user1",
  "password": "password1"
}
```

- Send the request to obtain a JWT token.

**Protected Route Request:**
- Create a new request.
- Set the request method to GET.
- Set the URL to a protected route in your application.
- In the Headers tab, add a new key-value pair:

  - Key: `Authorization`
  - Value: `Bearer <your JWT token>` (replace `<your JWT token>` with the token obtained from the login request)

- Send the request. You should receive a response with the protected data.

This part demonstrates how to implement JWT authentication in an Express.js API using the MVC pattern, making your code more organized and maintainable. 