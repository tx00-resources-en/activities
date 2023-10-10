<!-- # Activity 2: Guided

**Step 1: Creating Configuration File**

1. Create a new file named `data.js` in your project directory.

2. In this `data.js` file, define a set of roles and sample data for users and projects. Here's what your `data.js` file should look like:

```javascript
const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Kyle', role: ROLE.ADMIN },
    { id: 2, name: 'Sally', role: ROLE.BASIC },
    { id: 3, name: 'Joe', role: ROLE.BASIC }
  ],
  projects: [
    { id: 1, name: "Kyle's Project", userId: 1 },
    { id: 2, name: "Sally's Project", userId: 2 },
    { id: 3, name: "Joe's Project", userId: 3 }
  ]
}
```

This file contains an object named `ROLE` that defines the roles 'admin' and 'basic'. It also includes sample data for users and projects, where each user has an ID, name, and a role, and each project has an ID, name, and a reference to the user who created it.

You will use this data to demonstrate and test the roles and permissions in your Express app throughout the guided lab.

**Step 2: Creating the Permission Module**

1. Create a new folder named `auth` in your project's root directory. This folder will house the permission-related files.

2. Inside the `auth` folder, create a new file named `permissions.js`.

2. In this `permissions.js` file, you will define permission-related functions that allow or restrict certain actions based on the user's role and the data from the `data.js` file.

Here's what the `permissions.js` file contains:

```javascript
const { ROLE } = require('../data')

// Function to check if a user can view a project
function canViewProject(user, project) {
  return (
    user.role === ROLE.ADMIN ||
    project.userId === user.id
  )
}

// Function to filter projects based on user's role and ownership
function scopedProjects(user, projects) {
  if (user.role === ROLE.ADMIN) return projects
  return projects.filter(project => project.userId === user.id)
}

// Function to check if a user can delete a project
function canDeleteProject(user, project) {
  return project.userId === user.id
}

module.exports = {
  canViewProject,
  scopedProjects,
  canDeleteProject
}
```

Here's an explanation of each function in the `permissions.js` file:

- `canViewProject(user, project)`: This function checks if a user can view a project. Users with the 'admin' role can view any project, while users can view a project if they are the owner of that project.

- `scopedProjects(user, projects)`: This function filters projects based on the user's role and ownership. Admin users can see all projects, while non-admin users can only see projects they own.

- `canDeleteProject(user, project)`: This function checks if a user can delete a project. Users can delete a project only if they are the owner of that project.

These permission functions will be used to control access to various actions and routes in your Express app. In the upcoming steps, you'll integrate these functions into your routes to showcase role-based permissions.

**Step 3: Creating the `basicAuth.js` File**

1. Inside the `auth` folder that you created in the previous step, create a new file named `basicAuth.js`. This file will contain middleware functions for basic user authentication and role-based authorization.

Here's the code for the `basicAuth.js` file:

```javascript
function authUser(req, res, next) {
  if (req.user == null) {
    res.status(403);
    return res.send('You need to sign in');
  }

  next();
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send('Not allowed');
    }

    next();
  };
}

module.exports = {
  authUser,
  authRole
};
```

You can now create the `basicAuth.js` file in your `auth` folder and add this code to it. This code defines the `authUser` and `authRole` middleware functions for user authentication and role-based authorization in your Express app.

2. Open the `basicAuth.js` file and add the provided code. This code defines two middleware functions:
   - `authUser`: This function checks if a user is authenticated (signed in). If the user is not authenticated, it returns a 403 Forbidden status and a "You need to sign in" message.
   - `authRole(role)`: This function returns a middleware that checks if the authenticated user has the specified role. If the user's role doesn't match the provided role, it returns a 401 Unauthorized status and a "Not allowed" message.

By creating the `basicAuth.js` file and adding these middleware functions, you are setting up the foundation for user authentication and role-based authorization in your Express app.

**Step 4: Creating the `projectsRouter.js` File**


1. Create a new folder named `routes` in your project's root directory. Inside the `routes` folder, create a new file named `projectsRouter.js`.

Here's the code for the `projectsRouter.js` file:

```javascript
const express = require('express');
const router = express.Router();
const { projects } = require('../data');
const { authUser } = require('../auth/basicAuth');
const { canViewProject, canDeleteProject, scopedProjects } = require('../auth/project');

router.get('/', authUser, (req, res) => {
  res.json(scopedProjects(req.user, projects));
});

router.get('/:projectId', setProject, authUser, authGetProject, (req, res) => {
  res.json(req.project);
});

router.delete('/:projectId', setProject, authUser, authDeleteProject, (req, res) => {
  res.send('Deleted Project');
});

function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId);
  req.project = projects.find(project => project.id === projectId);
  
  if (req.project == null) {
    res.status(404);
    return res.send('Project not found');
  }
  next();
}

function authGetProject(req, res, next) {
  if (!canViewProject(req.user, req.project)) {
    res.status(401);
    return res.send('Not Allowed');
  }

  next();
}

function authDeleteProject(req, res, next) {
  if (!canDeleteProject(req.user, req.project)) {
    res.status(401);
    return res.send('Not Allowed');
  }

  next();
}

module.exports = router;
```

This code defines the `projectsRouter.js` file in your `routes` folder, which contains routes for getting and deleting projects, along with middleware functions for user authentication and authorization based on the project's ownership and user roles.

Here's an explanation for the code in the `projectsRouter.js` file:

1. Define the GET Route for Listing Projects:
   - Create a GET route at the path `'/'` that lists projects.
   - Use the `authUser` middleware to ensure user authentication.
   - In the route handler, respond with the projects filtered based on the user's role using the `scopedProjects` function.

2. Define the GET Route for Retrieving a Single Project:
   - Create a GET route with a dynamic parameter `:projectId` for retrieving a specific project by its ID.
   - Use the `setProject` middleware to find and set the `req.project` variable based on the provided `projectId`.
   - Use the `authUser` middleware to ensure user authentication.
   - Use the `authGetProject` middleware to check if the user is allowed to view the project.
   - In the route handler, respond with the details of the specified project (`req.project`).

3. Define the DELETE Route for Deleting a Project:
   - Create a DELETE route with a dynamic parameter `:projectId` for deleting a specific project by its ID.
   - Use the `setProject` middleware to find and set the `req.project` variable based on the provided `projectId`.
   - Use the `authUser` middleware to ensure user authentication.
   - Use the `authDeleteProject` middleware to check if the user is allowed to delete the project.
   - In the route handler, respond with a message indicating that the project has been deleted.

4. Middleware Functions:
   - Define three middleware functions: `setProject`, `authGetProject`, and `authDeleteProject`.
   - `setProject`: Finds and sets the `req.project` variable based on the `projectId`. If the project is not found, it returns a 404 response.
   - `authGetProject`: Checks if the user is allowed to view the project using the `canViewProject` function. If not, it returns a 401 response.
   - `authDeleteProject`: Checks if the user is allowed to delete the project using the `canDeleteProject` function. If not, it returns a 401 response.

5. Export the Router:
   - Export the `router` object, making it available for use in other parts of your application.

These steps collectively define the routes and middleware functions for handling project-related operations with authentication and authorization checks based on user roles and project ownership.


**Step 5: Create the main `app.js` File**

In this step, you will create the main `app.js` file and set up the Express application. This file will define routes and use the middleware functions you've created so far.

1. Inside your project directory, create a file named `app.js`.

2. Open `app.js` in your code editor.

3. Add the following code to `app.js`:

```javascript
const express = require("express");
const app = express();
const { ROLE, users } = require("./data");
const { authUser, authRole } = require("./auth/basicAuth");
const projectRouter = require("./routes/projectsRouter.js");

app.use(express.json());
app.use(setUser);

// Define routes using Express Router
// http://localhost:3000/projects
app.use("/projects", projectRouter);

// http://localhost:3000
app.get("/", (req, res) => {
  res.send("Home Page");
});

// http://localhost:3000/dashboard
app.get("/dashboard", authUser, (req, res) => {
  res.send("Dashboard Page");
});

// http://localhost:3000/admin
app.get("/admin", authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send("Admin Page");
});

// Middleware to set the user based on the request body
function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
```

In this step, you've created the main Express application file (`app.js`) and set up routes for the home page, dashboard, and admin page. You've also applied the `authUser` and `authRole` middleware functions to secure the dashboard and admin routes.

**Step 6: Testing the API with Postman - GET Requests with User ID**

In this step, you will use Postman to test the API with GET requests that include the user ID in the request body. 


1. **Enter Request URL**:

   - In the URL field, enter the URL for the endpoint you want to test. For example:
   
     - To test the Home Page, enter `http://localhost:3000`.
     - To test the Dashboard Page, enter `http://localhost:3000/dashboard`.
     - To test the Admin Page, enter `http://localhost:3000/admin`.

2. **Add User ID to Request Body**:

   - In Postman, click on the "Body" tab below the request URL.
   - Select "raw" and choose "JSON (application/json)" from the dropdown.
   - In the request body, enter the user ID in JSON format. For example:
   
```json
{
 "userId": 1
}
```

3. **View the Response**:

   - Postman will display the response from your API, including the status code, response body, and headers.

**(Optional) Step 7: Refactoring Code**

In this step, you will organize and refactor your middleware code in creating a dedicated "`middlewares`" folder.  -->