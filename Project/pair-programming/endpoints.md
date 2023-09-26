# API Documentation

## Overview

This API serves as the backend for a goal-tracking application. It provides endpoints for managing user accounts and goals.

Base URL: `/api`

## Endpoints

### User Routes

#### Register a New User

- **Route**: `POST /users`
- **Description**: Register a new user.
- **Request Body**:
  - `name` (string, required): The user's name.
  - `email` (string, required): The user's email address.
  - `password` (string, required): The user's password.
- **Response**:
  - Status Code: 201 (Created) on success.
  - JSON Response:
    - `_id` (string): User ID.
    - `name` (string): User's name.
    - `email` (string): User's email address.
    - `token` (string): JSON Web Token for authentication.

#### User Login

- **Route**: `POST /users/login`
- **Description**: Authenticate a user and obtain a JWT token.
- **Request Body**:
  - `email` (string, required): The user's email address.
  - `password` (string, required): The user's password.
- **Response**:
  - Status Code: 200 (OK) on success.
  - JSON Response:
    - `_id` (string): User ID.
    - `name` (string): User's name.
    - `email` (string): User's email address.
    - `token` (string): JSON Web Token for authentication.

#### Get User Data

- **Route**: `GET /users/me`
- **Description**: Retrieve user data for the authenticated user.
- **Authentication**: Requires a valid JWT token in the request header.
- **Response**:
  - Status Code: 200 (OK) on success.
  - JSON Response:
    - `_id` (string): User ID.
    - `name` (string): User's name.
    - `email` (string): User's email address.

### Goal Routes

#### Get Goals

- **Route**: `GET /goals`
- **Description**: Retrieve goals for the authenticated user.
- **Authentication**: Requires a valid JWT token in the request header.
- **Response**:
  - Status Code: 200 (OK) on success.
  - JSON Response: An array of goal objects.

#### Create a New Goal

- **Route**: `POST /goals`
- **Description**: Create a new goal.
- **Authentication**: Requires a valid JWT token in the request header.
- **Request Body**:
  - `text` (string, required): The text content of the goal.
- **Response**:
  - Status Code: 201 (Created) on success.
  - JSON Response: The created goal object.

#### Update a Goal

- **Route**: `PUT /goals/:id`
- **Description**: Update an existing goal by ID.
- **Authentication**: Requires a valid JWT token in the request header.
- **Request Body**: Any fields you want to update in the goal.
- **Response**:
  - Status Code: 200 (OK) on success.
  - JSON Response: The updated goal object.

#### Delete a Goal

- **Route**: `DELETE /goals/:id`
- **Description**: Delete a goal by ID.
- **Authentication**: Requires a valid JWT token in the request header.
- **Response**:
  - Status Code: 200 (OK) on success.
  - JSON Response: An object indicating the deleted goal's ID.

## Error Handling

- The API returns appropriate HTTP status codes and error messages for various error scenarios.
- Detailed error messages are provided in the response JSON for easy debugging.

## Authentication

- Authentication is required for all routes in the `/users` and `/goals` groups.
- JWT (JSON Web Tokens) are used for authentication.

## Example Usage

Here's an example of how to register a new user using the API:

```http
POST /api/users HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

Response:

```json
HTTP/1.1 201 Created
Content-Type: application/json

{
  "_id": "user-id",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "token": "jwt-token"
}
```
