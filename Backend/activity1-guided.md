# Activity 1: Guided

### Part 1/2:

Create documentation for the workout (V1) API server, which was the focus of our backend work last week. You can find the server's source code [here](https://github.com/tx00-web/activities/tree/week7/Backend/workout-v1)

To get started, follow these steps:

1. Begin by installing the following packages: `swagger-ui-express` and `swagger-jsdoc`.

2. Create a file named swaggerConfig.js with the following content:

```js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workout API",
      version: "1.0.0",
      description: "API for managing workouts",
    },
    servers: [
      {
        url: "http://localhost:4000/api", // Update with your API server URL
      },
    ],
  },
  apis: ["routes/*.js", "controllers/*.js"], // Update with the path to your route file
  components: {
    schemas: {
      Workout: {
        type: "object",
        properties: {
          title: { type: "string" },
          reps: { type: "number" },
          load: { type: "number" },
        },
        example: {
          title: "Sample Workout",
          reps: 10,
          load: 50,
        },
      },
    },
  },
};

const specs = swaggerJsdoc(options);
module.exports = specs;
```

3. At the top of your app.js file, add the following code:
   
```javascript
// Import your Swagger configuration
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig.js");
```

4. In app.js, modify your routes as follows:

```javascript
// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

5. replace the content of `routes/workouts.js` with the following:
   
```js
const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: API endpoints for managing workouts
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         reps:
 *           type: integer
 *         load:
 *           type: integer
 *       required:
 *         - title
 *         - reps
 *         - load
 *       example:
 *         title: Push ups
 *         reps: 40
 *         load: 5
 */

// GET all workouts
/**
 * @swagger
 * /workouts:
 *   get:
 *     summary: Get all workouts
 *     tags: [Workouts]
 *     responses:
 *       200:
 *         description: Returns an array of all workouts
 *       500:
 *         description: Internal server error
 */
router.get("/", getWorkouts);

// GET a single workout
/**
 * @swagger
 * /workouts/{id}:
 *   get:
 *     summary: Get a single workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a single workout
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getWorkout);

// POST a new workout
/**
 * @swagger
 * /workouts:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workouts]
 *     requestBody:
 *       description: New workout object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       201:
 *         description: Workout created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", createWorkout);

// DELETE a workout
/**
 * @swagger
 * /workouts/{id}:
 *   delete:
 *     summary: Delete a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Workout deleted successfully
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteWorkout);

// UPDATE a workout
/**
 * @swagger
 * /workouts/{id}:
 *   patch:
 *     summary: Update a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated workout object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       200:
 *         description: Workout updated successfully
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", updateWorkout);

module.exports = router;
```
6. Start the server.

7. Visit http://localhost:4000/api-docs to access and test all the API endpoints.

> Remember to stop the server before proceeding to Part 2 of this activity.

### Part 2/2

Create documentation for the workout (V2) API server, which was the focus of our backend work last week. You can find the server's source code [here](https://github.com/tx00-web/activities/tree/week7/Backend/workout-v2)

To get started, follow these steps:

1. Begin by installing the following packages: `swagger-ui-express` and `swagger-jsdoc`

2. Create a file named swaggerConfig.js with the following content:

```js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workout API",
      version: "1.0.0",
      description: "API for managing workouts",
    },
    servers: [
      {
        url: "http://localhost:4000/api", // Update with your API server URL
      },
    ],
  },
  apis: ["routes/workouts.js", "routes/user.js"],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
```

3. At the top of your app.js file, add the following code:
   
   ```javascript
   // Import your Swagger configuration
   const swaggerUi = require("swagger-ui-express");
   const swaggerSpec = require("./swaggerConfig.js");
   ```

4. Modify your routes as follows:

```javascript
// routes
app.use("/api/user", userRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
```

5. Replace the content of `routes/user.js` with the following:

```js
const express = require("express");

// controller functions
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUserRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       required:
 *         - name
 *         - email
 *         - password
 *       example:
 *         name: Bob
 *         email: bob@gmail.com
 *         password: 4wa95#Cf-
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginUserRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       required:
 *         - email
 *         - password
 *       example:
 *         email: bob@gmail.com
 *         password: 4wa95#Cf-
 */

// Define User routes first
/**
 * @swagger
 * tags:
 *   - name: "User"
 *     description: "Endpoints related to user management"
 */

// signup route
/**
 * @swagger
 * /user/signup:
 *   post:
 *     summary: Signup User
 *     operationId: SignupUser
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: User signup data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: john_doe
 *               email: john@example.com
 *               password: 4wa95#Cf-
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid user data
 */
router.post("/signup", signupUser);

// login route
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login User
 *     operationId: LoginUser
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Bearer token
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: User login data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: susan@gmail.com
 *               password: 4wa95#Cf-
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid user credentials
 */
router.post("/login", loginUser);

module.exports = router;
```
6. Start the server.

7. Visit http://localhost:4000/api-docs to access and test all the API endpoints.
