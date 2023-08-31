# 

## Demo: how the code works

> Remember  to run `npm init -y` and `npm install`. Also add a dev script: `"dev": "nodemon server.js"`

1. **Import Express**: The code starts by importing the `express` library, which is a popular Node.js framework for building web applications.

2. **Create Express App and Set Port**: An Express application is created using `express()`, and the desired port (3001 in this case) is assigned to the `PORT` variable.

3. **Middleware Setup - JSON Parsing**: The line `app.use(express.json());` adds middleware to the application that parses incoming JSON data in the request bodies. This allows us to work with JSON data easily.

4. **Initial Notes Data**: An array named `notes` is created to hold note objects. These objects have properties like `id`, `content`, and `important`.

5. **GET Route for Root**: A simple route (`/`) responds with an HTML message "Hello World!" when accessed using a web browser.

6. **GET Route for Notes List**: The route `/api/notes` is created to handle GET requests for fetching all notes. It responds with the `notes` array in JSON format.

7. **GET Route for Single Note**: A dynamic route `/api/notes/:id` is created to handle GET requests for fetching a single note by its `id` parameter. The `:id` in the route acts as a placeholder for the actual note ID. Inside the route handler, it extracts the `id` from `req.params` and uses it to find the corresponding note. If found, the note is sent as a JSON response; otherwise, a 404 error is returned.

8. **POST Route for Adding a Note**: This route `/api/notes` handles POST requests for adding new notes. It extracts the `content` and `important` properties from the request body, creates a new note object, assigns it an ID, adds it to the `notes` array, and responds with the newly created note.

9. **PUT Route for Updating a Note**: The route `/api/notes/:id` handles PUT requests for updating a note. It extracts the `id`, `content`, and `important` properties from the request body. It then searches for the note with the specified `id`, updates its content and importance, and responds with the updated note. If the note is not found, a 404 error is returned.

10. **PATCH Route for Partial Update**: Similar to the PUT route, this `/api/notes/:id` route handles PATCH requests for partially updating a note. It extracts the `id`, `content`, and `important` properties from the request body. It searches for the note, updates the provided properties, and responds with the updated note. If the note is not found, a 404 error is returned.

11. **DELETE Route for Deleting a Note**: The route `/api/notes/:id` handles DELETE requests for deleting a note. It extracts the `id` from the route parameters, searches for the note, removes it from the `notes` array, and responds with the deleted note. If the note is not found, a 404 error is returned.

12. **Server Listening**: Finally, the app starts listening on the specified `PORT`, and a message is logged to the console indicating that the server is running.

These routes collectively create a simple API for managing notes using various HTTP methods: GET, POST, PUT, PATCH, and DELETE. The routes handle different types of requests, manipulate the `notes` array accordingly, and respond with the appropriate data or error messages.


## Test the endpoints with Postman 
---

### Postman

You can use Postman to test all the endpoints of your API. Here's how you can do it, along with examples of payloads for each request.

1. **GET Request**:
   - Open Postman.
   - Set the request type to "GET".
   - Enter the URL: `http://localhost:3001/api/notes`.
   - Click the "Send" button.
   - You should receive a response containing the list of notes.

2. **GET Request for Single Note**:
   - Open Postman.
   - Set the request type to "GET".
   - Enter the URL with a specific note ID: `http://localhost:3001/api/notes/1`.
   - Click the "Send" button.
   - You should receive a response containing the note with the specified ID (if it exists).

3. **POST Request**:
   - Open Postman.
   - Set the request type to "POST".
   - Enter the URL: `http://localhost:3001/api/notes`.
   - Go to the "Body" tab.
   - Select "raw" and choose "JSON (application/json)" from the dropdown.
   - Enter the payload example:
     ```json
     {
       "content": "This is a new note",
       "important": false
     }
     ```
   - Click the "Send" button.
   - You should receive a response containing the newly created note.
   -  Verify Changes
     -  Set the request type to "GET".
     -  Enter the URL to fetch all notes: http://localhost:3001/api/notes
     -  Click the "Send" button.
     -  You'll receive a response containing the list of notes.

4. **PUT Request**:
   - Open Postman.
   - Set the request type to "PUT".
   - Enter the URL with a specific note ID: `http://localhost:3001/api/notes/1`.
   - Go to the "Body" tab.
   - Select "raw" and choose "JSON (application/json)" from the dropdown.
   - Enter the payload example for updating the note:
     ```json
     {
       "content": "Updated note content",
       "important": true
     }
     ```
   - Click the "Send" button.
   - You should receive a response containing the updated note.
   -  Verify Changes
     -  Set the request type to "GET".
     -  Enter the URL to fetch all notes: http://localhost:3001/api/notes
     -  Click the "Send" button.
     -  You'll receive a response containing the list of notes.

5. **PATCH Request**:
   - Open Postman.
   - Set the request type to "PATCH".
   - Enter the URL with a specific note ID: `http://localhost:3001/api/notes/1`.
   - Go to the "Body" tab.
   - Select "raw" and choose "JSON (application/json)" from the dropdown.
   - Enter the payload example for partial update:
     ```json
     {
       "content": "Updated content only"
     }
     ```
   - Click the "Send" button.
   - You should receive a response containing the partially updated note.
   -  Verify Changes
     -  Set the request type to "GET".
     -  Enter the URL to fetch all notes: http://localhost:3001/api/notes
     -  Click the "Send" button.
     -  You'll receive a response containing the list of notes.

6. **DELETE Request**:
   - Open Postman.
   - Set the request type to "DELETE".
   - Enter the URL with a specific note ID: `http://localhost:3001/api/notes/1`.
   - Click the "Send" button.
   - You should receive a response containing the deleted note.
   -  Verify Changes
     -  Set the request type to "GET".
     -  Enter the URL to fetch all notes: http://localhost:3001/api/notes
     -  Click the "Send" button.
     -  You'll receive a response containing the list of notes.

Remember to adjust the note IDs and payload data as needed for your testing. Postman will allow you to interact with your API endpoints and verify that they are working correctly for different HTTP methods and request payloads.

### Difference between PUT and PATCH 

Both the PUT and PATCH HTTP methods are used for updating resources on a server, but they differ in how they handle updates:

1. **PUT**:
   - The PUT method is used to update or create a resource at a specific URL.
   - When you make a PUT request, you typically send the entire representation of the resource in the request payload.
   - The server replaces the existing resource with the new representation provided in the request.
   - If the resource doesn't exist at the specified URL, some servers might create a new resource with that URL, effectively treating the PUT request as a creation request.
   - PUT requests are idempotent, meaning that making the same request multiple times should result in the same state on the server.

2. **PATCH**:
   - The PATCH method is used to apply partial modifications to a resource.
   - When you make a PATCH request, you send only the changes that need to be applied to the resource in the request payload.
   - The server processes the changes and applies them to the existing resource. It doesn't require sending the entire resource representation.
   - PATCH requests are useful when you want to make small updates to a resource without sending unnecessary data. It can be more efficient when dealing with large resources.
   - PATCH requests are also idempotent, similar to PUT requests. Making the same PATCH request multiple times should not have different effects than making it once.

> The key difference between PUT and PATCH is in the extent of the update:
  - PUT requests require sending the entire updated resource representation and replace the existing resource with the new one.
  - PATCH requests only send the changes that need to be applied to the existing resource, allowing for partial updates.

Which method to use depends on the specific use case and the nature of the updates you want to perform. If you have complete data to replace the resource, PUT might be more appropriate. If you're making partial updates or want to optimize network usage, PATCH is a better choice.

### `find` method next week

> The line of code you provided uses the `find` method on an array to search for a specific element that meets a certain condition. 
> Will be explained next week, but in brief, here's a breakdown of how it works:

```js
const note = notes.find((note) => note.id === id);
```

1. `notes`: This is the array in which you're searching for a specific element. In your case, it's the array of notes.

2. `.find((note) => note.id === id)`: This is a higher-order function called `find`, which is available for arrays. It takes a callback function as an argument. The callback function is executed for each element in the array until the first element is found that meets the specified condition. Here's what's happening inside the callback function:

   - `(note) => ...`: This part defines an anonymous arrow function that takes an argument `note`. This `note` represents the current element being processed during each iteration.

   - `note.id === id`: This is the condition you're checking for. It compares the `id` property of the current `note` element with the `id` that you're searching for.

3. `const note = ...`: The result of the `find` method is assigned to the `note` variable. If a note is found that satisfies the condition (`note.id === id`), it will be assigned to `note`. If no matching note is found, `note` will be `undefined`.

> This line of code `const note = notes.find((note) => note.id === id)` searches the `notes` array for an element whose `id` property matches the `id` value you're searching for. If a matching note is found, it's assigned to the `note` variable; otherwise, `note` remains `undefined`. This is a common pattern in JavaScript to search for an object in an array based on a specific property value.
>

### splice() vs filter()

instead of using `const deletedNote = notes.splice(noteIndex, 1)[0];`, we can achieve the same functionality in an **immutable** way,using array filtering to create a new array without the element you want to delete. Here's how it can be done:

```js
const updatedNotes = notes.filter((note) => note.id !== id);
const deletedNote = notes.find((note) => note.id === id);
```

Here's a breakdown of how this approach works:

1. `notes`: This is the array of notes.

2. `.filter((note) => note.id !== id)`: The `filter` method creates a new array by iterating through each element in the `notes` array and retaining only the elements that satisfy the given condition. In this case, it's retaining all notes except the one with the specified `id`.

3. `const updatedNotes = ...`: The new array with the deleted note removed is assigned to the `updatedNotes` variable. This array is immutable because you're creating a new array rather than modifying the existing one.

4. `const deletedNote = notes.find((note) => note.id === id)`: This line is unchanged. It searches for the note with the specified `id` and assigns it to the `deletedNote` variable.

Using the `filter` method to create an updated array in an immutable way is a common approach in JavaScript when you want to remove elements from an array while preserving the original array intact.



<!-- Links -->
[Postman download]:https://www.postman.com/downloads/