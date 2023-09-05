# Activity 2


> **Note:** While some students prefer not to have step-by-step instructions, others find them helpful. To accommodate both preferences, I have prepared detailed step-by-step instructions. 
> Have a group discussion to decide whether you'd like to utilize the step-by-step instructions, and feel free to invite me to the Zoom breakout rooms.

### Goals

- Build a RESTful API.
- Perform CRUD operations.
- Write API endpoints.

### Minimum Viable Product

- Add a `dev` script to the `package.json` to run the API using `nodemon`.

- Add the code necessary to `index.js` to implement the endpoints listed below.
- Separate the endpoints that begin with `/api/posts` into a separate Express Router inside `api/posts/posts-router.js`.
- Configure the API to handle to the following routes. 

| N | Method | Endpoint                | Description                                                                                                                     |
| - | ------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1 | GET    | /api/posts              | Returns **an array of all the post objects**                                   |
| 2 | GET    | /api/posts/:id          | Returns **the post object with the specified id**                                                                               |
| 3 | POST   | /api/posts              | Creates a post using the information sent inside the request body and returns **the newly created post object**                 |
| 4 | PUT    | /api/posts/:id          | Updates the post with the specified id using data from the request body and **returns the modified document**, not the original |
| 5 | DELETE | /api/posts/:id          | Removes the post with the specified id and returns the **deleted post object**                                                  |
| 6 | GET    | /api/posts/:id/comments | Returns an **array of all the comment objects** associated with the post with the specified id                                  |

#### 1 [GET] /api/posts

- If there's an error in retrieving the _posts_:
  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The posts information could not be retrieved" }`.

#### 2 [GET] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in retrieving the _post_:
  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post information could not be retrieved" }`.

#### 3 [POST] /api/posts

- If the request body is missing the `title` or `contents` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON: `{ message: "Please provide title and contents for the post" }`.

- If the information about the _post_ is valid:

  - save the new _post_.
  - return HTTP status code `201` (Created).
  - return the newly created _post_.

- If there's an error while saving the _post_:
  - respond with HTTP status code `500` (Server Error).
  - return the following JSON: `{ message: "There was an error while saving the post" }`.

#### 4 [PUT] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If the request body is missing the `title` or `contents` property:

  - respond with HTTP status code `400` (Bad Request).
  - return the following JSON: `{ message: "Please provide title and contents for the post" }`.

- If there's an error when updating the _post_:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post information could not be modified" }`.

- If the post is found and the new information is valid:

  - update the post document using the new information sent in the `request body`.
  - return HTTP status code `200` (OK).
  - return the newly updated _post_.

#### 5 [DELETE] /api/posts/:id

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in removing the _post_:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The post could not be removed" }`.

#### 6 [GET] /api/posts/:id/comments

- If the _post_ with the specified `id` is not found:

  - return HTTP status code `404` (Not Found).
  - return the following JSON: `{ message: "The post with the specified ID does not exist" }`.

- If there's an error in retrieving the _comments_:

  - respond with HTTP status code `500`.
  - return the following JSON: `{ message: "The comments information could not be retrieved" }`.

### Blog Post Schema

A Blog Post has the following structure:

```js
{
  title: "The post title", // String, required
  contents: "The post contents", // String, required
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

### Comment Schema

A Comment has the following structure:

```js
{
  text: "The text of the comment", // String, required
  post_id: "The id of the associated post", // Integer, required, must match the id of a post entry 
  created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
}
```

### Important Notes

- Test your work manually using Postman. 
- In your solution, it is essential that you follow best practices and produce clean and professional results.

s

