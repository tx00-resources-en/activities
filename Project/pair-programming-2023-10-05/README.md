## Pair Activity

There are 2 parts in this activity: The second part (**i.e. deployment**) can be done outside. 

- [Part 1/2: Backend Testing](#part-12-backend-testing)
- [Part 2/2: Deployment (can be done outside.)](#part-22-deployment)
- [Extra](#extra)

----
## Part 1/2: Backend Testing

### Summary (TL;DR)

The Goal Tracker API located in the `pair-programming-2023-10-05/mern`  API enables users to perform actions such as registering, logging in, managing their goals, and implementing user authentication using JSON Web Tokens (JWTs).

Your primary objective is to design and implement tests that thoroughly evaluate the functionality of the following operations:

1. **User Registration**: Assess the process of registering new users.
2. **User Login**: Validate the functionality of user authentication and login.

Additionally, you should also focus on testing the following user-related functionalities:

1. **Add**: Test the ability to add goals.
1. **Delete**: Test the deletion of goals.
2. **Update**: Verify the ability to update goals.
3. **Reading Goals**: Create tests to ensure the proper retrieval of goal(s) from the API.


### Detailed instructions:

**Step 1: Initial Setup**

1. Download the code from the `pair-programming-2023-10-05/mern` folder.
2. Rename the "`dotenvexample`" file to "`.env`" and configure it with you own database settings. `MONGO_URI` and `MONGO_URI_TEST`.
3. Start the server. Determine whether you need to navigate inside the "`backend`" directory for this step.
4. Once the server is running, use `Postman` to test basic functionalities.

**Step 2:**

1. **Refactor Server**:
   - Refactor the server code to extract the `app` from the server.

2. **Dependency Updates**:
   - Add `cross-env` as a dependency (not a development dependency).
   - Install `jest` as a development dependency.

3. **Configuration File**:
   - Create a `config.js` file following the structure from this example: [config.js Example](https://github.com/tx00-web/activities/blob/week7/Backend/workout-v2/utils/config.js).

4. **Environment Setup**:
   - Define three environments: development, production, and test.

5. **Test Folder**:
   - Create a `tests` folder.

6. **Teardown Script**:
   - Inside the `tests` folder, create a `teardown.js` file with content similar to this example: [teardown.js Example](https://github.com/tx00-web/activities/blob/week7/Backend/workout-v2/tests/teardown.js).

7. **Jest Configuration**:
   - In your `package.json`, configure Jest to run tests only in the Node.js environment, disabling JSDom. Add the following to your `package.json`:

     ```json
     "jest": {
       "testEnvironment": "node",
       "globalTeardown": "./tests/teardown.js"
     }
     ```

8. **Test Scripts**:
   - Add a test script in your `package.json` similar to the one in this example: [package.json Example](https://github.com/tx00-web/activities/blob/week7/Backend/workout-v1/package.json).

9. **Test Implementation**:
   - Use the code from these example files: [workout.test.js](https://github.com/tx00-web/activities/blob/week7/Backend/workout-v2/tests/workout.test.js) and [workout_api.test.js](https://github.com/tx00-web/activities/blob/week7/Backend/workout-v1/tests/workout_api.test.js) to write tests that thoroughly evaluate the functionality of the specified operations:
     - User Registration.
     - User Login
     - Add Goals, Delete Goals, Update Goals, and Reading Goals: Implement similar test cases based on your application's requirements.

-----------
## Part 2/2: Deployment

- Deploy Backend & **Test with postman**
  - [Basic]
  - [Detailed]
- [Deploy Frontend]
- [How to Deploy MERN Full-Stack to Render]


------
## Extra: 

- When deploying application to [Render](https://render.com/), keep in mind that if `cross-env` is saved as a development dependency, it would cause an application error on your web server. To fix this, change `cross-env` to a production dependency by running this in the command : `npm install cross-env`
- When deploying our application on render.com, it's crucial to confirm that the port configuration is set correctly at the end of the `index.js` file, as demonstrated below:

```js
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    // Code to execute upon server start
});
```

This code ensures that we utilize the port specified in the `PORT` environment variable. In cases where the `PORT` environment variable is not defined, the application will default to using port 3001. Services like Render rely on this environment variable to configure the application's port as needed.
- When you attempt to deploy your backend to Render, make sure you have a separate repository for the backend.
- When running your tests you may run across the following console warning [Ref](https://fullstackopen.com/en/part4/testing_the_backend):
```sh
jest console warning about not exiting
```
The problem is quite likely caused by the Mongoose version 6.x, the problem does not appear when version 5.x or 7.x is used. Mongoose documentation does not recommend testing Mongoose applications with Jest.

One way to get rid of this is to add to the directory tests a file teardown.js with the following content
```js
module.exports = () => {
  process.exit(0)
}
```
and by extending the Jest definitions in the package.json as follows
```sh
{
 //...
 "jest": {
   "testEnvironment": "node",
   "globalTeardown": "./tests/teardown.js" }
}
```
Another error you may come across is your test takes longer than the default Jest test timeout of 5000 ms. This can be solved by adding a third parameter to the test function:
```js
test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)
```


<!-- Links -->

[Basic]:https://render.com/docs/deploy-node-express-app
[Detailed]:https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/
[Deploy Frontend]:https://render.com/docs/deploy-create-react-app
[How to Deploy MERN Full-Stack to Render]:https://medium.com/@vmaineng/how-to-deploy-mern-full-stack-to-render-f7ab380660b6