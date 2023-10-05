# Activity 2

###  Task 1:

1. Navigate to the `workout-v2` directory.
2. Rename the `.envexample` file to `.env`. 
3. Inside the `.env` file, add two MongoDB URIs: one for development and one for testing purposes.
4. Run the following commands:
  - Execute `npm install` to install the required dependencies.
  - Execute `npm test` to run the tests using Jest.

5. Open the `workout-v2/tests/workout.test.js` file and refactor the code to follow a more structured and descriptive style, similar to what is demonstrated in the first activity.

###  Task 2:

Create backend tests to validate the functionality of the following operations: `delete`, `update`, and `read`ing a single workout

### [Note](https://fullstackopen.com/en/part4/testing_the_backend):

- Take a look at the changes made to `index.js`. The server logic is moved into a separate file named `app.js`.  Then we import `app.js` into `index.js` and create an HTTP server using the imported `app`.

This change allows us to use `app.js` effectively with Supertest, as Supertest manages its own internal port for testing purposes.

Here's the updated code:

```js
const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
```

- Instead of using the config module in `workout-v2/utils/` folder, we could have used the [node-config package](https://github.com/lorenwest/node-config).

- In `tests/workout.test.js`, line 34 we used `.expect('Content-Type', /application\/json/)`

`/application\/json/` is a regular expression (regex). The regex starts and ends with a slash /, because the desired string application/json also contains the same slash, it is preceded by a \ so that it is not interpreted as a regex termination character.

In principle, the test could also have been defined as a string
```sh
.expect('Content-Type', 'application/json')
```
The problem here, however, is that when using a string, the value of the header must be exactly the same. For the regex we defined, it is acceptable that the header contains the string in question. The actual value of the header is` application/json`; charset=utf-8, i.e. it also contains information about character encoding. However, our test is not interested in this and therefore it is better to define the test as a regex instead of an exact string.