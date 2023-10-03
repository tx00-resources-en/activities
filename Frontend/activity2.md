# Activity 2

**Setup:**
1. Download the code from this repository: https://github.com/iamshaunjp/MERN-Auth-Tutorial/tree/lesson-17

2. Inside the "backend" folder, locate the `.env` file, and update the database URI.

3. Start the server by running `npm start` from within the "backend" folder. Note: If you prefer, you can use `npm run dev` after installing nodemon.

4. Start the client by running `npm start` from within the "frontend" folder.

**Register:**
1. Register yourself and observe the usage of local storage.

2. Attempt to log out and note the changes in local storage.

3. Log in and observe the local storage again.

**Refactoring:**
- Refactor the code responsible for token storage, retrieval, and removal. Use localSession instead of localStorage for this purpose.

- Modify the Signup and Login components to utilize the `useField` custom hook introduced in Activity 1 for improved code organization and reusability.