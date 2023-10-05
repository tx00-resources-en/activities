#  Task: Environment Variables in Node.js

**Objective:** In this lab, you will learn how to effectively manage different environments: `production`, `development`, and `test`. 


**Part 1: Setting Up the Project**
1. Create a new directory for your project, e.g., "`env-variable-lab`."
2. Initialize a new Node.js project inside the directory using `npm init`.
3. Install the necessary dependencies: `cross-env` and `dotenv`.

**Part 2: Environment Variable Configuration**
1. Create a configuration file (e.g., `config.js`) in your project's root directory.
2. In `config.js`, define environment-specific configurations using JavaScript objects.
3. Use Node.js's `process.env.NODE_ENV` to switch between different environments. By default, set it to `development`.
4. Depending on the environment, connect to the appropriate database. Here's an example:
   
```javascript
// config.js
require("dotenv").config();
const NODE_ENV = process.env.NODE_ENV|| 'development';
const PORT = process.env.PORT;

const MONGO_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGO_URI
    : process.env.MONGO_URI;

module.exports = {
  NODE_ENV,
  MONGO_URI,
  PORT,
};
```

## Part 3:  `.env` file

Create a `.env` file for with the following content:

```sh
PORT=3001
# NODE_ENV=production
NODE_ENV=development
# NODE_ENV=test
TEST_MONGO_URI=mongodb://TEST_db_uri
MONGO_URI=mongodb://my_db_uri
JWT_SECRET = abc123
```

**Part 4: package.json**

Update the` package.json` file with the following content:

```json
  "scripts": {
    "start": "cross-env  NODE_ENV=production node index.js",
    "dev": "cross-env NODE_ENV=development node index.js",
    "test": "cross-env NODE_ENV=test node index.js"
  }
```

**Part 5: Test**
In your main application file (e.g., `index.js`), require the `config.js` file to access environment-specific configurations.

```js
const config = require("./config");

console.log("Database: ", config.MONGO_URI);
console.log("NODE_ENV: ", config.NODE_ENV);
console.log("PORT: ", config.PORT);
```

try the following commands:
- `npm start` 
- `npm test` 
- `npm run dev` 
