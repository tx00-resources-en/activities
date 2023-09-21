# Activities during the project sessions
 
> Please ensure that you have the following hierarchy in place. All activities should be located in `./dev/week5/Project`.

```sh
Dev
└── week5
    ├── Frontend
    ├── Backend
    ├── Project
    └── Reflection-Journal
```

### 2023-09-21: Activity

## Step 1
To begin, clone the MERN app repository by executing the following command:

```shell
npx degit iamshaunjp/MERN-Auth-Tutorial#lesson-1 MERN-app
```

Next, navigate to the "backend" folder and perform the following steps:
1. Update the database link in the `.env` file.
2. Run the following commands:
```shell
npm install
npm run dev
```
This will start the server, which should be listening on port 4000.

Now, within the "frontend" folder, execute the following commands:
1. Run `npm install`.
2. Start the application with `npm start`.

3. Verify that the code (frontend/backend) is functioning correctly.

## Step 2
In this step, we will refactor the code. 

In the WorkoutsContext.js file ("frontend/src/context/"), the useReducer Hook returns the current workouts and the dispatch function that allows updates. Currently, it is encapsulated within a single WorkoutsContextProvider.

We aim to refactor the code to use two separate contexts, as shown in the [tutorial].

Follow these steps:

1. Create two new contexts:
   - **WorkoutContext**: This context will provide the current list of workouts.
   - **WorkoutDispatchContext**: This context will provide the function that allows components to dispatch actions.

> **Ensure that your code functions as expected** with these new contexts **before removing** the **old WorkoutsContext**.

> Reference the [tutorial] for additional guidance on this refactoring process.


<!-- Links -->
[tutorial]:https://react.dev/learn/scaling-up-with-reducer-and-context#step-1-create-the-context

<!-- - https://github.com/iamshaunjp/MERN-Auth-Tutorial
- https://github.com/iamshaunjp/Complete-React-Tutorial/blob/lesson-32/dojo-blog/src/Create.js -->
