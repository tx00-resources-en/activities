# Activity 2: Step by step

> These step-by-step instructions are provided as guidelines, but please **don't anticipate having 100%** of the answers.

**Intro**

In this lab, you will create an API server using Node.js and Express. The server will implement several endpoints to manage blog posts and their associated comments. Follow the step-by-step instructions to build the server.

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

## Step 1: Set Up Your Project

Create a new directory for your project and navigate to it in your terminal.

```bash
mkdir blog-api
cd blog-api
```

Initialize a Node.js project and install the necessary dependencies.

```bash
npm init -y
npm install express
npm install nodemon --save-dev
```

Add a `"dev"` script to your `package.json` file to run the API using `nodemon`. Open `package.json` and add the following script:

```json
"scripts": {
  "dev": "nodemon index.js"
},
```

## Step 2: Create the Server File

Create a new JavaScript file named `index.js` in your project directory.


## Step 3: Set Up the Express Server

In `index.js`, set up the Express server, import necessary modules, and configure middleware to parse JSON data:

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Sample data for blog posts and comments
const posts = [];
const comments = [];

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

## Step 4: Implement the Endpoints

In `index.js`, implement the following endpoints to manage blog posts and comments:

### [GET] /api/posts

```javascript
app.get('/api/posts', (req, res) => {
  // Return an array of all post objects
  res.json(posts);
});
```

### [GET] /api/posts/:id

```javascript
app.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;

  // Find the post with the specified ID
  const post = posts.find(p => p.id === id);

  // If the post is not found, respond with a 404 status code and a message
  if (!post) {
    return res.status(404).json({ message: "The post with the specified ID does not exist" });
  }

  // Respond with the post object
  res.json(post);
});
```

### [POST] /api/posts

```javascript
app.post('/api/posts', (req, res) => {
  const { title, contents } = req.body;

  // Check if title and contents properties are present in the request body
  if (!title || !contents) {
    return res.status(400).json({ message: "Please provide title and contents for the post" });
  }

  // Create a new post object
  const newPost = {
    id: Date.now().toString(),
    title,
    contents,
    created_at: new Date(),
    updated_at: new Date(),
  };

  // Add the new post to the posts array
  posts.push(newPost);

  // Respond with the newly created post and HTTP status 201 (Created)
  res.status(201).json(newPost);
});
```

### [PUT] /api/posts/:id

```javascript
app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;

  // Find the index of the post with the specified ID
  const index = posts.findIndex(p => p.id === id);

  // If the post is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The post with the specified ID does not exist" });
  }

  // Check if title and contents properties are present in the request body
  if (!title || !contents) {
    return res.status(400).json({ message: "Please provide title and contents for the post" });
  }

  // Update the post's title, contents, and updated_at
  posts[index].title = title;
  posts[index].contents = contents;
  posts[index].updated_at = new Date();

  // Respond with the updated post
  res.json(posts[index]);
});
```

### [DELETE] /api/posts/:id

```javascript
app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;

  // Find the index of the post with the specified ID
  const index = posts.findIndex(p => p.id === id);

  // If the post is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The post with the specified ID does not exist" });
  }

  // Remove the post from the array and store the deleted post
  const deletedPost = posts.splice(index, 1)[0];

  // Respond with the deleted post
  res.json(deletedPost);
});
```

### [GET] /api/posts/:id/comments

```javascript
app.get('/api/posts/:id/comments', (req, res) => {
  const { id } = req.params;

  // Find the post with the specified ID
  const post = posts.find(p => p.id === id);

  // If the post is not found, respond with a 404 status code and a message
  if (!post) {
    return res.status(404).json({ message: "The post with the specified ID does not exist" });
  }

 

 // Find comments associated with the post
  const postComments = comments.filter(comment => comment.post_id === id);

  // Respond with the array of comments
  res.json(postComments);
});
```

## Step 5: Start the Server

At the bottom of `index.js`, start the Express server by listening on the specified port:

```javascript
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

## Step 6: Run the Server

In your terminal, run the server using the following command:

```bash
npm run dev
```

Your server should now be running, and you'll see the "Server is running on port 3001" message in the console.

## Step 7: Implement Comment Endpoints

In `index.js`, continue implementing the comment endpoints to manage comments associated with blog posts:

### [POST] /api/posts/:id/comments

```javascript
app.post('/api/posts/:id/comments', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  // Find the post with the specified ID
  const post = posts.find(p => p.id === id);

  // If the post is not found, respond with a 404 status code and a message
  if (!post) {
    return res.status(404).json({ message: "The post with the specified ID does not exist" });
  }

  // Check if the text property is present in the request body
  if (!text) {
    return res.status(400).json({ message: "Please provide text for the comment" });
  }

  // Create a new comment object
  const newComment = {
    text,
    post_id: id,
    created_at: new Date(),
    updated_at: new Date(),
  };

  // Add the new comment to the comments array
  comments.push(newComment);

  // Respond with the newly created comment and HTTP status 201 (Created)
  res.status(201).json(newComment);
});
```

### [GET] /api/comments/:id

```javascript
app.get('/api/comments/:id', (req, res) => {
  const { id } = req.params;

  // Find the comment with the specified ID
  const comment = comments.find(c => c.id === id);

  // If the comment is not found, respond with a 404 status code and a message
  if (!comment) {
    return res.status(404).json({ message: "The comment with the specified ID does not exist" });
  }

  // Respond with the comment object
  res.json(comment);
});
```

### [PUT] /api/comments/:id

```javascript
app.put('/api/comments/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  // Find the index of the comment with the specified ID
  const index = comments.findIndex(c => c.id === id);

  // If the comment is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The comment with the specified ID does not exist" });
  }

  // Check if text property is present in the request body
  if (!text) {
    return res.status(400).json({ message: "Please provide text for the comment" });
  }

  // Update the comment's text and updated_at
  comments[index].text = text;
  comments[index].updated_at = new Date();

  // Respond with the updated comment
  res.json(comments[index]);
});
```

### [DELETE] /api/comments/:id

```javascript
app.delete('/api/comments/:id', (req, res) => {
  const { id } = req.params;

  // Find the index of the comment with the specified ID
  const index = comments.findIndex(c => c.id === id);

  // If the comment is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The comment with the specified ID does not exist" });
  }

  // Remove the comment from the array and store the deleted comment
  const deletedComment = comments.splice(index, 1)[0];

  // Respond with the deleted comment
  res.json(deletedComment);
});
```

## Step 8: Test the Comment Endpoints

You can use Postman to test your API endpoints. Make requests to each endpoint to create, retrieve, update, and delete user records. Verify that the API responds correctly according to the specified requirements.

1. **GET /api/posts** (Retrieve All Posts):

   - Open Postman.
   - Create a new request and set the request type to "GET."
   - Enter the URL of your API, for example: `http://localhost:3001/api/posts`
   - Click the "Send" button.
   - You should receive a response with an array of all post objects.

2. **GET /api/posts/:id** (Retrieve a Post by ID):

   - Create a new request and set the request type to "GET."
   - Enter the URL with a specific post ID, for example: `http://localhost:3001/api/posts/1`
   - Click the "Send" button.
   - You should receive a response with the post object that matches the ID.

3. **POST /api/posts** (Create a Post):

   - Create a new request and set the request type to "POST."
   - Enter the URL: `http://localhost:3001/api/posts`
   - In the "Body" tab, select "raw" and choose "JSON (application/json)" as the type.
   - Enter a JSON object with "title" and "contents," for example:

   ```json
   {
     "title": "New Post",
     "contents": "This is the content of the new post."
   }
   ```

   - Click the "Send" button.
   - You should receive a response with the newly created post object.

4. **PUT /api/posts/:id** (Update a Post):

   - Create a new request and set the request type to "PUT."
   - Enter the URL with a specific post ID, for example: `http://localhost:3001/api/posts/1`
   - In the "Body" tab, select "raw" and choose "JSON (application/json)" as the type.
   - Enter a JSON object with the updated "title" and "contents," for example:

   ```json
   {
     "title": "Updated Post",
     "contents": "This is the updated content of the post."
   }
   ```

   - Click the "Send" button.
   - You should receive a response with the modified post object.

5. **DELETE /api/posts/:id** (Delete a Post):

   - Create a new request and set the request type to "DELETE."
   - Enter the URL with a specific post ID, for example: `http://localhost:3001/api/posts/1`
   - Click the "Send" button.
   - You should receive a response with the deleted post object.

6. **GET /api/posts/:id/comments** (Retrieve Comments for a Post):

   - Create a new request and set the request type to "GET."
   - Enter the URL with a specific post ID, for example: `http://localhost:3001/api/posts/1/comments`
   - Click the "Send" button.
   - You should receive a response with an array of comments associated with the post.

7. **POST /api/posts/:id/comments** (Create a Comment for a Post):

   - Create a new request and set the request type to "POST."
   - Enter the URL with a specific post ID, for example: `http://localhost:3001/api/posts/1/comments`
   - In the "Body" tab, select "raw" and choose "JSON (application/json)" as the type.
   - Enter a JSON object with "text" for the comment, for example:

   ```json
   {
     "text": "This is a new comment for the post."
   }
   ```

   - Click the "Send" button.
   - You should receive a response with the newly created comment object.

8. **PUT /api/comments/:id** (Update a Comment):

   - Create a new request and set the request type to "PUT."
   - Enter the URL with a specific comment ID, for example: `http://localhost:3001/api/comments/1`
   - In the "Body" tab, select "raw" and choose "JSON (application/json)" as the type.
   - Enter a JSON object with the updated "text" for the comment, for example:

   ```json
   {
     "text": "This is the updated text of the comment."
   }
   ```

   - Click the "Send" button.
   - You should receive a response with the modified comment object.

9. **DELETE /api/comments/:id** (Delete a Comment):

   - Create a new request and set the request type to "DELETE."
   - Enter the URL with a specific comment ID, for example: `http://localhost:3001/api/comments/1`
   - Click the "Send" button.
   - You should receive a response with the deleted comment object.

