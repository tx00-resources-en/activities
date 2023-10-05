# Task: Setting Up Jest and Refactoring Tests

1. Navigate to the `workout-v1` directory.
2. Rename the `.envexample` file to `.env`. 
3. Inside the `.env` file, add two MongoDB URIs: one for development and one for testing purposes.
4. Run the following commands:
  - Execute `npm install` to install the required dependencies.
  - Execute `npm test` to run the tests using Jest.

5. Open the [workout_api.test.js](./workout-v1/tests/workout_api.test.js) file and refactor the code to follow a more structured and descriptive style, similar to what is demonstrated in task 2.

> Note: When working with Jest, you have the following options:
   - You can replace [`test()` with `it()`].
   - You can [run tests individually].
   - You can [skip certain tests] as needed.


<!-- Links -->
[`test()` with `it()`]:https://jestjs.io/docs/api#testname-fn-timeout
[run tests individually]:https://fullstackopen.com/en/part4/testing_the_backend#running-tests-one-by-one
[skip certain tests]:https://codewithhugo.com/run-skip-single-jest-test/