# Instructions

### Overview:

In this lab, you will be build a Goal Tracker API using Node.js and Express.js. The API will allow users to register, log in, manage their goals, and implement user authentication using JSON Web Tokens (JWTs).

### Specifications:

1. **User Registration (POST)**:

   - Create an endpoint `/api/users` that allows users to register by providing a name, email, and password.
   - Implement validation to ensure that all required fields are provided.
   - Use bcrypt to hash and securely store the user's password in the database.
   - Return a JSON response with the user's information and a JWT upon successful registration.

2. **User Login (POST)**:

   - Create an endpoint `/api/users/login` that allows users to log in using their email and password.
   - Implement validation to ensure that both email and password are provided.
   - Verify the user's credentials by checking the hashed password in the database.
   - Return a JSON response with the user's information and a JWT upon successful login.

3. **Manage Goals (CRUD Operations)**:

   - Create a goal model with the following fields:
     - `text`: The text content of the goal.
     - `user`: A reference to the user who created the goal.
   - Implement CRUD (Create, Read, Update, Delete) operations for goals with the following endpoints:
     - Create Goal (POST): `/api/goals`
     - Get Goals (GET): `/api/goals`
     - Update Goal (PUT): `/api/goals/:id`
     - Delete Goal (DELETE): `/api/goals/:id`
   - Implement authentication to ensure that only authenticated users can perform CRUD operations on their own goals.
   - Return appropriate JSON responses for each CRUD operation.

4. **User Authentication (Middleware)**:

   - Implement middleware for authentication (`authMiddleware.js`) to protect the `/api/goals` endpoints. Users must provide a valid JWT in the request headers to access these endpoints.
   - Ensure that unauthorized requests are met with a 401 (Unauthorized) status and an error message.

### Bonus:

As an optional challenge, you can add the following features:

- Ability to update and delete user accounts.
- Implement validation for email uniqueness during registration.
- Add error handling and validation for request data.
- Implement token expiration and refresh tokens for improved security.
