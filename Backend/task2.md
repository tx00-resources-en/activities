# Task: Adopting BDD Testing Style

## Part 1: Initial Setup

1. Navigate to the `simple_api_testing` directory in your project.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm test` to ensure that all existing tests run correctly.


## Part 2: Refactoring `airports.test.js`

1. Execute the command `npm run test1`. It should work, but we will proceed to refactor the code into a more BDD-style format.
1. Compare the code in `airports.test.js` with the provided code snippet below:
   
```javascript
const { request, expect } = require("./config");

describe("Airport API", function () {
  describe("GET /airports", function () {
    describe("when retrieving airports", function () {
      it("should return a list of airports limited to 30 per page", async function () {
        const response = await request.get("/airports");

        expect(response.status).to.eql(200);
        expect(response.body.data.length).to.eql(30);
      });
    });
  });

  describe("POST /airports/distance", function () {
    describe("when calculating the distance between two airports", function () {
      it("should return a 200 status and the distance information", async function () {
        const response = await request
          .post("/airports/distance")
          .send({ from: "KIX", to: "SFO" });

        expect(response.status).to.eql(200);

        const attributes = response.body.data.attributes;
        expect(attributes).to.include.keys(
          "kilometers",
          "miles",
          "nautical_miles"
        );
        expect(attributes.kilometers).to.be.closeTo(8692, 1);
        expect(attributes.miles).to.be.closeTo(5397, 1);
        expect(attributes.nautical_miles).to.be.closeTo(4690, 1);
      });
    });
  });
});
```

1. Replace the existing code in `airports.test.js` with the provided code.

## Part 3: Refactoring `favorites.test.js`

Rewrite the code in  `favorites.test.js` file to be more structured and descriptive style, as in part 2.


## Links

- [Dead-Simple API Tests With SuperTest, Mocha, and Chai](https://dev-tester.com/dead-simple-api-tests-with-supertest-mocha-and-chai/)
- [src](https://github.com/dennmart/dead_simple_api_testing)
- [API](https://airportgap.dev-tester.com)
