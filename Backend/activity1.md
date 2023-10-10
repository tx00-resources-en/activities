# Activity 1

Prepare documentation for the Goals API server, which was a part of last week's project. The server's source code can be found [here](https://github.com/tx00-web/activities/tree/week7/Project/pair-programming-2023-10-05/mern)

Here are some instructions to guide you:

1. Begin by reviewing the source code for the workout v2 sever ([below](#code-for-the-workout-server))).
2. install the following packages: `swagger-ui-express` and `swagger-jsdoc`
3. Modify the Swagger.json ([below]()) file accordingly. You can use the [Swagger Editor](https://editor.swagger.io/) for this purpose. 
4. In your main application file, add the following code:

```javascript
// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger.json");

// After defining your routes, add the following line:
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
```

5. Test the endpoints

### Code for the workout server

```js
const config = require("./utils/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const logger = require("./utils/logger");

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger.json");


// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  logger.info(req.path, req.method);
  next();
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// connect to db
logger.info("connecting to", config.MONGO_URI);
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("connected to db");
  })
  .catch((error) => {
    logger.error(error);
  });

module.exports = app;
```

### Swagger.json

```json
{
    "openapi": "3.0.0",
    "info": {
      "title": "Workouts API",
      "contact": {},
      "version": "1.0"
    },
    "servers": [
      {
        "url": "http://localhost:4000/api",
        "variables": {}
      }
    ],
    "paths": {
      "/user/signup": {
        "post": {
          "tags": [
            "Auth"
          ],
          "summary": "Register User",
          "operationId": "RegisterUser",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RegisterUserRequest"
                },
                "example": {
                  "name": "bob",
                  "email": "bob@gmail.com",
                  "password": "4wa95#Cf-"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/user/login": {
        "post": {
          "tags": [
            "Auth"
          ],
          "summary": "Login User",
          "operationId": "LoginUser",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginUserRequest"
                },
                "example": {
                  "email": "susan@gmail.com",
                  "password": "secret"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/workouts": {
        "post": {
          "tags": [
            "Workouts"
          ],
          "summary": "Create Workout",
          "operationId": "CreateWorkout",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateWorkoutRequest"
                },
                "example": {
                  "title": "Sample Workout",
                  "reps": 10,
                  "load": 50
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        },
        "get": {
          "tags": [
            "Workouts"
          ],
          "summary": "Get All Workouts",
          "operationId": "GetAllWorkouts",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      },
      "/workouts/{id}": {
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "schema": {
              "type": "string"
            },
            "required": true,
            "description": "The Workout ID"
          }
        ],
        "get": {
          "tags": [
            "Workouts"
          ],
          "summary": "Get Single Workout",
          "operationId": "GetSingleWorkout",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        },
        "patch": {
          "tags": [
            "Workouts"
          ],
          "summary": "Update Workout",
          "operationId": "UpdateWorkout",
          "parameters": [],
          "requestBody": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateWorkoutRequest"
                },
                "example": {
                  "title": "Random Workout",
                  "reps": 1,
                  "load": 5
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        },
        "delete": {
          "tags": [
            "Workouts"
          ],
          "summary": "Delete Workout",
          "operationId": "DeleteWorkout",
          "parameters": [],
          "responses": {
            "204": {
              "description": "",
              "headers": {}
            }
          },
          "deprecated": false
        }
      }
    },
    "components": {
      "schemas": {
        "RegisterUserRequest": {
          "title": "RegisterUserRequest",
          "required": [
            "name",
            "email",
            "password"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "example": {
            "name": "bob",
            "email": "bob@gmail.com",
            "password": "4wa95#Cf-"
          }
        },
        "LoginUserRequest": {
          "title": "LoginUserRequest",
          "required": [
            "email",
            "password"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "example": {
            "email": "bob@gmail.com",
            "password": "4wa95#Cf-"
          }
        },
        "CreateWorkoutRequest": {
          "title": "CreateWorkoutRequest",
          "required": [
            "title",
            "reps",
            "load"
          ],
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            },
            "reps": {
              "type": "integer"
            },
            "load": {
              "type": "integer"
            }
          },
          "example": {
            "tille": "Push ups",
            "reps": 40,
            "load": 5
          }
        },
        "UpdateWorkoutRequest": {
          "title": "UpdateWorkoutRequest",
          "required": [
            "tille",
            "reps",
            "load"
          ],
          "type": "object",
          "properties": {
            "tille": {
              "type": "string"
            },
            "reps": {
              "type": "integer"
            },
            "load": {
              "type": "integer"
            }
          },
          "example": {
            "tille": "random",
            "reps": 4,
            "load": 25
          }
        }
      },
      "securitySchemes": {
        "httpBearer": {
          "type": "http",
          "scheme": "bearer"
        }
      }
    },
    "security": [
      {
        "httpBearer": []
      }
    ],
    "tags": [
      {
        "name": "Auth",
        "description": ""
      },
      {
        "name": "Workouts",
        "description": ""
      }
    ]
  }
```