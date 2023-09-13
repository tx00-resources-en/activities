# Fetch API

**Step 1:**

start the blog API server


Create a simple Node.js server that serves JSON data. You can use the Express.js framework for this purpose. First, make sure you have Node.js installed. Then, follow these steps:

1. Create a new directory for your project.
2. Navigate to the project directory in your terminal.
3. Run the following commands to initialize a Node.js project and install Express:

```bash
npm init -y
npm install express
```

4. Create an `index.js` file in your project directory with the following code:

```javascript
const express = require('express');
const app = express();
const port = 3001; // You can choose any available port

// Mock blog data
const blogs = [
  { id: 1, title: 'Blog 1', content: 'Content of Blog 1' },
  { id: 2, title: 'Blog 2', content: 'Content of Blog 2' },
];

// Define a route to return the blog data as JSON
app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

5. Start your Node.js server by running:

```bash
node index.js
```

Your server will now be running on `http://localhost:3001`.

**Step 2: Create a Fetch Function in a Separate JavaScript File**

Now, you can create a separate JavaScript file to fetch data from your Node.js server and log it to the console.

1. Create a new JavaScript file (e.g., `fetchData.js`) in your project directory.

2. Add the following code to `fetchData.js`:

```javascript
const fetch = require('node-fetch');

const apiUrl = 'http://localhost:3001/api/blogs'; // Replace with your server's API endpoint

const fetchBlogs = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchBlogs();
```

**Step 3: Run the Fetch Script**

To run the fetch script, execute the following command in your project directory:

```bash
node fetchData.js
```

This script will fetch data from your Node.js server and log it in the console. Make sure your Node.js server (`index.js`) is running while you execute this script.

That's it! You have a Node.js server serving mock blog data, and you can fetch and log this data using the Fetch API in another JavaScript file.