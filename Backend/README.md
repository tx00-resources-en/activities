# Back End

### announcement:

- **Self Assessment** in the **reflection journal**
- Next Thursday: project presentation

### Topics

- Development vs Production vs Testing
- Testing
- Deployment

--------
### Environment

- [Development and Production](https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/)
- [Testing: Need for different databases](https://dev.to/kristianroopnarine/how-to-separate-your-test-development-and-production-databases-using-nodeenv-anl)
- [cross-env: ](https://www.npmjs.com/package/cross-env) `"start": "cross-env  NODE_ENV=production node index.js"`
- [Demo1](/demo/Backend/demo1-env/)

### Backend Testing

- [Newman], command-line collection runner for Postman
- [Superagent]
- [Supertest], extends [Superagent] with `expect`
- [mocha]
- [chai]
- [Activity 1](./activity1.md)


--------
### Backend Testing
- [jest](https://jestjs.io/)
- [Activity 2](./activity2.md)

### [Notes]((https://fullstackopen.com/en/part4/testing_the_backend):)

- Mongoose [documentation](https://mongoosejs.com/docs/jest.html#recommended-testenvironment) does not recommend testing Mongoose applications with Jest.
- `supertest` takes care that the application being tested is started at the port that it uses internally.
- When code gets refactored, there is always the risk of [regression](https://en.wikipedia.org/wiki/Regression_testing), meaning that existing functionality may break. Let's refactor the remaining operations by first writing a test for each route of the API.


------
### Reading

- [fullstackopen](https://fullstackopen.com/en/part4/testing_the_backend)
- [TDD,BDD](https://phoenixnap.com/blog/tdd-vs-bdd)

### Useful Links

- Testing Express REST API With Jest & Supertest
  - [video](https://www.youtube.com/watch?v=r5L1XRZaCR0)
  - [src](https://github.com/TomDoesTech/Testing-Express-REST-API/)
- [Supertest: How to Test APIs Like a Pro](https://www.testim.io/blog/supertest-how-to-test-apis-like-a-pro/)
- [Automated testing with Mocha](https://javascript.info/testing-mocha)

- [How to Test Your Express API with SuperTest and jest](https://rahmanfadhil.com/test-express-with-supertest/)



<!-- 
## Feedback

- [Web-Development (TX00EY23-3001)](https://ojp.metropolia.fi/lomakkeet/1/lomake.html?code=VFgwMEVZMjMtMzAwMQ==)
- [Web-Project (TX00EY24-3001)](https://ojp.metropolia.fi/lomakkeet/1/lomake.html?code=VFgwMEVZMjQtMzAwMQ==)
 -->
[Newman]:https://github.com/postmanlabs/newman
[Superagent]:https://github.com/ladjs/superagent
[Supertest]:https://github.com/visionmedia/
[mocha]:https://github.com/mochajs/mocha
[chai]:https://github.com/chaijs/chai



