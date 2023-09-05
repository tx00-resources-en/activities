# Activity 1: Step by step

> These step-by-step instructions are provided as guidelines, but please **don't anticipate having 100%** of the answers.


**Step 0**
Please ensure that you have the following hierarchy in place. All back-end activities should be located in `./dev/week3/Backend`.

```sh
Dev
└── week3
    ├── Frontend
    ├── Backend
    ├── Project
    └── Reflection-Journal
```

**Step 1: Set Up the Project**

1. Create a new directory for your project and navigate to it in the terminal.

2. Initialize a new Node.js project by running:

```sh
 npm init -y
```

3. Install `express` as a dependency:

```sh
npm install express
```

4. Install `nodemon` as a development dependency:
```sh
npm install nodemon --save-dev
```

5. Create a new JavaScript file named `server.js` in your project directory.

**Step 2: Set Up the Express Server**

In `server.js`, set up the Express server, import necessary modules, and configure middleware to parse JSON data:

```javascript
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Sample user data array
const users = [];

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

**Step 3: Implement the POST Endpoint**

Here's how to implement the `POST /api/users` endpoint:

```javascript
app.post('/api/users', (req, res) => {
  const { name, bio } = req.body;

  // Check if name and bio properties are present in the request body
  if (!name || !bio) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }

  // Create a new user object
  const newUser = {
    id: Date.now().toString(), // Generate a unique ID (in a real app, use a library like uuid)
    name,
    bio,
  };

  // Add the new user to the users array
  users.push(newUser);

  // Respond with the newly created user and HTTP status 201 (Created)
  res.status(201).json(newUser);
});
```

**Step 4: Implement the GET Endpoint to Retrieve All Users**

Here's how to implement the `GET /api/users` endpoint to retrieve all users:

```javascript
app.get('/api/users', (req, res) => {
  // Respond with the array of users
  res.json(users);
});
```

**Step 5: Implement the GET Endpoint to Retrieve a User by ID**

Here's how to implement the `GET /api/users/:id` endpoint to retrieve a user by their ID:

```javascript
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;

  // Find the user with the specified ID
  const user = users.find(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (!user) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Respond with the user object
  res.json(user);
});
```

**Step 6: Implement the DELETE Endpoint**

Here's how to implement the `DELETE /api/users/:id` endpoint to delete a user by their ID:

```javascript
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  // Find the index of the user with the specified ID
  const index = users.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Remove the user from the array and store the deleted user
  const deletedUser = users.splice(index, 1)[0];

  // Respond with the deleted user
  res.json(deletedUser);
});
```

**Step 7: Implement the PUT Endpoint**

Here's how to implement the `PUT /api/users/:id` endpoint to update a user by their ID:

```javascript
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;

  // Find the index of the user with the specified ID
  const index = users.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Check if name and bio properties are present in the request body
  if (!name || !bio) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }

  // Update the user's name and bio
  users[index].name = name;
  users[index].bio = bio;

  // Respond with the updated user
  res.json(users[index]);
});
```

**Step 8: Start the Server**

At the bottom of `server.js`, start the Express server by listening on the specified port:

```javascript
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

**Step 9: Run the Server**

- Add a `dev` script to the `package.json` to run the API using `nodemon`.

In your terminal, run the server:


```bash
npm run dev
```

You can also use:

```bash
node server.js
```

Your server should now be running, and you'll see the "Server is running on port 3001" message in the console.

**Step 10: Testing the API with Postman**

You can use Postman to test your API endpoints. Make requests to each endpoint to create, retrieve, update, and delete user records. Verify that the API responds correctly according to the specified requirements.

1. **Testing the `POST /api/users` Endpoint**

   - Open Postman.
   - Create a new request and set the request type to `POST`.
   - Enter the URL for your API (e.g., `http://localhost:3001/api/users`).
   - In the request body, select the "raw" option and set the content type to `JSON (application/json)`.
   - Provide valid user data in the request body. For example:

     ```json
     {
       "name": "John Doe",
       "bio": "Web Developer"
     }
     ```

   - Send the request.
   - You should receive a response with a `201 Created` status code and a JSON object containing the newly created user, including its `id`.

2. **Testing the `GET /api/users` Endpoint**

   - Create a new request and set the request type to `GET`.
   - Enter the URL for your API (e.g., `http://localhost:3001/api/users`).
   - Send the request.
   - You should receive a response with a `200 OK` status code and an array of user objects.

3. **Testing the `GET /api/users/:id` Endpoint**

   - Create a new request and set the request type to `GET`.
   - Enter the URL for your API with a valid user ID (e.g., `http://localhost:3001/api/users/1`). Ensure that you replace `1` with an actual user ID from your data.
   - Send the request.
   - If the user ID exists, you should receive a response with a `200 OK` status code and a JSON object containing the user's details.
   - To test the "user not found" scenario, use an invalid user ID (e.g., `http://localhost:3001/api/users/999`). You should receive a `404 Not Found` status code and a message indicating that the user does not exist.

4. **Testing the `DELETE /api/users/:id` Endpoint**

   - Create a new request and set the request type to `DELETE`.
   - Enter the URL for your API with a valid user ID (e.g., `http://localhost:3001/api/users/1`). Replace `1` with the ID of a user you want to delete.
   - Send the request.
   - If the user ID exists, you should receive a response with a `200 OK` status code and a JSON object containing the deleted user's details.
   - To test the "user not found" scenario, use an invalid user ID (e.g., `http://localhost:3001/api/users/999`). You should receive a `404 Not Found` status code and a message indicating that the user does not exist.

5. **Testing the `PUT /api/users/:id` Endpoint**

   - Create a new request and set the request type to `PUT`.
   - Enter the URL for your API with a valid user ID (e.g., `http://localhost:3001/api/users/1`). Replace `1` with the ID of a user you want to update.
   - In the request body, select the "raw" option and set the content type to `JSON (application/json)`.
   - Provide updated user data in the request body. For example:

     ```json
     {
       "name": "Updated Name",
       "bio": "Updated Bio"
     }
     ```

   - Send the request.
   - If the user ID exists and the request body contains valid data, you should receive a response with a `200 OK` status code and a JSON object containing the updated user's details.
   - To test the "user not found" scenario, use an invalid user ID (e.g., `http://localhost:3001/api/users/999`). You should receive a `404 Not Found` status code and a message indicating that the user does not exist.
   - To test the "missing name or bio" scenario, provide an empty request body (e.g., `{}`) or omit the `name` or `bio` property. You should receive a `400 Bad Request` status code and a message indicating that name and bio are required.




