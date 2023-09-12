# Activity 2

In this lab, our objective is to enhance the users API we worked on last week by implementing data persistence through **Mongoose/MongoDB**. It's crucial to maintain a structured approach by following the MVC (Model-View-Controller) pattern throughout this process.

### Goals

- Build a RESTful API.
- Perform CRUD operations.
- Write API endpoints.

### Minimum Viable Product

- Add a `dev` script to the `package.json` to run the API using `nodemon`.

- Add the code necessary in `server.js` to create a Web API and implement the following _endpoints_:

| Method | URL            | Description                                                                                            |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |
| GET    | /api/users     | Returns an array users.                                                                                |
| GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |
| DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |
| PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |

### User Schema

Each User _resource_ should conform to the following structure (AKA schema):

```js
{
  id: "a_unique_id", 
  name: "Jane Doe",  
  bio: "Having fun", 
}
```


### Endpoint Specifications

When the client makes a `POST` request to `/api/users`:

- If the request body is missing the `name` or `bio` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ message: "Please provide name and bio for the user" }`.

- If the information about the _user_ is valid:

  - respond with HTTP status code `201` (Created).
  - return the newly created _user document_ including its id.

- If there's an error while saving the _user_:
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON object: `{ message: "There was an error while saving the user" }`.

When the client makes a `GET` request to `/api/users`:

- If there's an error in retrieving the _users_:
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ message: "The users information could not be retrieved" }`.

When the client makes a `GET` request to `/api/users/:id`:

- If the _user_ with the specified `id` is not found:

  - respond with HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The user with the specified ID does not exist" }`.

- If there's an error in retrieving the _user_:
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ message: "The user information could not be retrieved" }`.

When the client makes a `DELETE` request to `/api/users/:id`:

- If the _user_ with the specified `id` is not found:

  - respond with HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The user with the specified ID does not exist" }`.

- If there's an error in removing the _user_:
  - respond with HTTP status code `500`.
  - return the following JSON object: `{ message: "The user could not be removed" }`.

When the client makes a `PUT` request to `/api/users/:id`:

- If the _user_ with the specified `id` is not found:

  - respond with HTTP status code `404` (Not Found).
  - return the following JSON object: `{ message: "The user with the specified ID does not exist" }`.

- If the request body is missing the `name` or `bio` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON response: `{ message: "Please provide name and bio for the user" }`.

- If there's an error when updating the _user_:

  - respond with HTTP status code `500`.
  - return the following JSON object: `{ message: "The user information could not be modified" }`.

- If the user is found and the new information is valid:

  - update the user document using the new information sent in the `request body`.
  - respond with HTTP status code `200` (OK).
  - return the newly updated _user document_.

### Important Notes

- Test your work manually using Postman. 
- In your solution, it is essential that you follow best practices and produce clean and professional results.

