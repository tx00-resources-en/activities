#

###  With jest: 

- you can replace [test() with it()]
- you can[run tests one by one]
- you can [skip certain tests]

###  [Other Notes](https://fullstackopen.com/en/part4/testing_the_backend):

- The config module in `workout-v2/utils/` folder slightly resembles the [node-config package](https://github.com/lorenwest/node-config).
- If you are deploying this application to [Render](https://render.com/), keep in mind that if `cross-env` is saved as a development dependency, it would cause an application error on your web server. To fix this, change `cross-env` to a production dependency by running this in the command : `npm install cross-env`
- Mongoose [documentation](https://mongoosejs.com/docs/jest.html#recommended-testenvironment) does not recommend testing Mongoose applications with Jest.
- `supertest` takes care that the application being tested is started at the port that it uses internally.
- When code gets refactored, there is always the risk of [regression](https://en.wikipedia.org/wiki/Regression_testing), meaning that existing functionality may break. Let's refactor the remaining operations by first writing a test for each route of the API.
 
### How to Run single tests

The `npm` test command executes all of the tests for the application. When we are writing tests, it is usually wise to only execute one or two tests. Jest offers a few different ways of accomplishing this, one of which is the only method. If tests are written across many files, this method is not great.

A better option is to specify the tests that need to be run as parameters of the npm test command.

The following command only runs the tests found in the `tests/note_api.test`.js file:

```js
npm test -- tests/note_api.test.js
```

The `-t` option can be used for running tests with a specific name:

```js
npm test -- -t "a specific note is within the returned notes"
```

The provided parameter can refer to the name of the test or the describe block. The parameter can also contain just a part of the name. The following command will run all of the tests that contain notes in their name:

```js
npm test -- -t 'notes'
```

> When running a single test, the mongoose connection might stay open if no tests using the connection are run. The problem might be due to the fact that supertest primes the connection, but Jest does not run the `afterAll` portion of the code. 





<!-- Links -->
[test() with it()]:https://jestjs.io/docs/api#testname-fn-timeout
[run tests one by one]:https://fullstackopen.com/en/part4/testing_the_backend#running-tests-one-by-one
[skip certain tests]:https://codewithhugo.com/run-skip-single-jest-test/