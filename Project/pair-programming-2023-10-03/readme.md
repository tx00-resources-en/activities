# Pair Programming Lab

**Part 1: Initial Setup**

1. Download the code from the "pair-programming-2023-10-03" folder using the "npx degit" command.
2. Rename the "dotenv example" file to ".env" and configure it with your own database settings.
3. Start the server. Determine whether you need to navigate inside the "backend" directory for this step.
4. Once the server is running, use Postman to sign up, ensuring you verify the server's port and endpoint for the signup process.
5. After creating an account, go to the "frontend-starter" folder, run "npm install," and then start the client with "npm start."
6. Attempt to log in since you've already registered an account. After logging in, test the ability to add and delete goals.
7. Manually log out by clearing the localStorage.

**Part 2: Implement Logout and Signup**

1. Collaboratively implement the logout functionality in your application and test it.
2. Together, implement the signup functionality, allowing you to register another account, and thoroughly test the process.

**Part 3: Code Refactoring**

Collaborate on refactoring the Login and Signup components to incorporate the useField custom hooks introduced in a the morning activities.

**Part 4: Alternative Server Setup**

1. Stop both the server and the client.
2. Run "npm run server2" in the main folder. This will start a new server in "backend-brad"
3. Create a new account using Postman or use the previous one.
4. Start the client and test the registration, login, and logout processes. 
5. Check the ability to create and delete items. 

> Observe whether the page refreshes after deleting an item.

**Part 5: Password Verification**

- Enhance the Signup form collaboratively by adding a "password2" field, ensuring that users enter the same password in both "password" and "password2" fields for password verification.
- Do you have to make any modifications to the backend?

**Part 6: Change to Local Session**

- Explore and discuss the application's storage mechanism collaboratively. 
- Evaluate the potential security improvements by changing from local storage to local session.

**Part 7: Script and Proxy**

- Collaboratively investigate the purpose of the "all" script that utilizes the "concurrently" library.
- Discuss the "setupProxy.js" file in the "frontend-starter" folder. This [link](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually) might be helpful

> Throughout these parts, ensure that you work closely together, document your observations, findings, and any code changes made during the pair programming session.

<!-- 


## Usage

Rename the `.envexample` to `.env` and add your `MONGO_URI`

### Install dependencies

```sh
# Backend deps
npm install
npm run server
```

```sh
# Frontend deps
cd frontend
npm install
npm start
```


### Configuring the Proxy Manually


You can get direct access to the Express app instance and hook up your own proxy middleware.
You can use this feature in conjunction with the proxy property in package.json, but it is recommended you consolidate all of your logic into `src/setupProxy.js`.

First, install http-proxy-middleware using npm or Yarn:
```sh
$ npm install http-proxy-middleware
```
Next, create `src/setupProxy.js` and place the following contents in it:

```jsx
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
```

- https://create-react-app.dev/docs/proxying-api-requests-in-development/
 -->
