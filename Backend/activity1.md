# Activity 1

Today, as a collaborative effort, we will create an API server. In this endeavor, we will **encounter various challenges and bugs**, but we **shall remain resolute in our determination** to ensure the development of a fully functional server. Additionally, don't forget that **you are welcome to utilize ChatGPT** as a valuable resource throughout this process.

Our primary objective is to implement the following endpoints within our API:

1. **POST /api/blogs:** This endpoint allows us to create a blog using the data provided in the request body.

2. **GET /api/blogs:** Here, we retrieve a list of all blogs stored in our server.

3. **GET /api/blogs/:id:** This endpoint returns the blog object associated with the specified ID.

4. **DELETE /api/blogs/:id:** It facilitates the removal of a blog with the specified ID and provides the deleted blog as a response.

5. **PUT /api/blogs/:id:** For updating a blog, this endpoint utilizes data from the request body and returns the modified blog.

To maintain a structured approach, we'll follow the Model-View-Controller (MVC) pattern. Let's break down the steps we'll be taking, **in no particular order**:

1. Begin by setting up an npm folder for our project.

2. Install the necessary packages: npm, mongoose, and nodemon.

3. Create a `server.js` file to serve as the entry point for our application.

4. Define the required scripts in the `package.json` file.

5. Create a `config` folder and a `db.js` file within it. Add the following code to establish a connection to the MongoDB database:

```javascript
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://tx00-web:TX00%23web%2323@cluster0.1x4ks.mongodb.net/mern-app-demo?retryWrites=true&w=majority";

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Connected to the database`);
}

module.exports = connectDB;
```

6. Develop a blog controller (`controller.js`) in the controllers folder and provide placeholder code.

7. Create a blog router within the routes folder.

8. Test the following endpoints using a tool like Postman to ensure they return dummy data:
   - POST /api/blogs
   - GET /api/blogs

9. Design a blog model within the models folder that adheres to the specified schema:

```javascript
{
  title: "Blog title", // String, required
  body: "Lorem lorem",  // String, required
  author: "Matti", // String, required
}
```

10. Proceed step-by-step to update the controller, starting with the handler for the POST request.

11. Thoroughly test each endpoint using Postman and verify that the correct status codes are returned.

12. Keep in mind that error handling will be addressed during a separate evening lab session.

By following these steps and collaborating as a class, we aim to successfully create our API server while gaining valuable experience in web development.