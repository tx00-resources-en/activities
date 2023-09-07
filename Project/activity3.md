# Lab Title: Understanding the Node.js Event Loop

**Objective:** 
To gain a deeper understanding of the Node.js Event Loop and asynchronous programming.

## Part 1

**1. Create a Node.js Script:**

   Create a new directory for your lab and inside it, create a file named `event_loop_lab.js`.

**2. The Event Loop:**

   Write JavaScript code to demonstrate the basic concept of the Node.js Event Loop. In this code, use the `setTimeout` function to simulate asynchronous behavior. 

   ```javascript
   // event_loop_lab.js

   console.log("Start of script");

   setTimeout(() => {
     console.log("Callback 1: This is a non-blocking operation.");
   }, 2000);

   console.log("End of script");
   ```

   - **Explanation**: 
     - In this step, we create a simple Node.js script (`event_loop_lab.js`) that logs messages to the console. 
     - We use the `setTimeout` function to simulate a non-blocking operation that will execute after a delay of 2000 milliseconds (2 seconds).
     - The order of log messages helps illustrate how the Event Loop processes asynchronous tasks.

**3. Multiple Callbacks:**

   Extend the script to include multiple `setTimeout` calls with different delay times. Observe how the Event Loop processes them.

   ```javascript
   // event_loop_lab.js

   console.log("Start of script");

   setTimeout(() => {
     console.log("Callback 1: This is a non-blocking operation.");
   }, 2000);

   setTimeout(() => {
     console.log("Callback 2: This is another non-blocking operation.");
   }, 1000);

   setTimeout(() => {
     console.log("Callback 3: Yet another non-blocking operation.");
   }, 500);

   console.log("End of script");
   ```

   - **Explanation**:
     - In this step, we add multiple `setTimeout` calls with different delay times to showcase how the Event Loop handles asynchronous tasks.
     - We observe that the callbacks are executed in the order they were scheduled, but the order of execution doesn't block the rest of the script.

**4. Handling I/O Operations:**

   Create a new script that simulates reading a large file asynchronously using the `fs` (File System) module in Node.js. Use the `fs.readFile` method.

   ```javascript
   // fs_lab.js

   const fs = require("fs");

   console.log("Start reading file...");

   fs.readFile("largefile.txt", "utf8", (err, data) => {
     if (err) {
       console.error("Error:", err);
     } else {
       console.log("File content length:", data.length);
     }
   });

   console.log("End of script");
   ```

   - **Explanation**:
     - In this step, we create a script (`fs_lab.js`) that demonstrates non-blocking I/O operations using the `fs` module to read a large file asynchronously.
     - We use the `fs.readFile` method with a callback function to handle the file read operation. The script continues executing without waiting for the file operation to complete.

**5. Experiment and Questions:**

   - Modify the delay times in your code and observe how it affects the order of execution.
   - Reflects on the following questions in your lab report:
     - What is the Node.js Event Loop, and how does it work?
     - Why is Node.js well-suited for building scalable and high-performance applications?
     - What are the benefits of non-blocking I/O in Node.js?
   

## Part 2

This section demonstrates how to use the Fetch API within Node.js to make HTTP requests and illustrates how Promises work in asynchronous operations.


**Objective:**
To learn how to use the Fetch API in Node.js to make HTTP requests and to understand Promises in asynchronous operations.


**1. Create a Node.js Script:**

   Create a new directory for your lab and inside it, create a file named `fetch_lab.js`.

**2. Making a GET Request:**

   Write JavaScript code to make a GET request to a public API (e.g., JSONPlaceholder) using the Fetch API. Use promises to handle the asynchronous response.

   ```javascript
   // fetch_lab.js
console.log("Fetching data...");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Fetched data:", data);
  })
   ```

   - **Explanation**:
     - In this step, we use the `node-fetch` package to import the Fetch API implementation for Node.js.
     - We make a GET request to a public API (`https://jsonplaceholder.typicode.com/posts/1`) and handle the response using Promises.
     - We check if the response status is okay (2xx range) and then parse the JSON data.

**3. Handling Errors:**

   Modify the script to handle errors by making a request to a non-existent URL.

   ```javascript
   // fetch_lab.js
   console.log("Fetching data...");

   fetch("https://jsonplaceholder.typicode.com/nonexistent")
     .then((response) => {
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json();
     })
     .then((data) => {
       console.log("Fetched data:", data);
     })
     .catch((error) => {
       console.error("Error:", error);
     });
   ```

   - **Explanation**:
     - In this step, we intentionally make a request to a non-existent URL to trigger an error.
     - We handle the error using the `.catch` block in the Promise chain.

**4. Experiment and Questions:**

   - Modify the script to make multiple concurrent requests and observe the order of responses.
   - Reflect on the following questions in your lab report:
     - What is the purpose of Promises in asynchronous JavaScript?
     - How does the `.then` method work in Promises?
     - How do you handle errors in Promises using `.catch`?
   
This section was designed to help you learn how to use the Fetch API in Node.js for making HTTP requests and to understand the concept of Promises for handling asynchronous operations. It's a fundamental skill for working with APIs and handling network requests in JavaScript.

## Part 3
----

This section demonstrates how to use the Fetch API with `async/await` in Node.js to make HTTP requests and handle asynchronous operations.

**Objective:**
To learn how to use the Fetch API in Node.js with `async/await` to make HTTP requests and handle asynchronous operations.


**1. Create a Node.js Script:**

   Create a new directory for your lab and inside it, create a file named `fetch_async_await_lab.js`.

**2. Making a GET Request with async/await:**

   Write JavaScript code to make a GET request to a public API using the Fetch API and `async/await` for asynchronous operations.

   ```javascript
   // fetch_async_await_lab.js
    async function fetchData() {
    
    console.log("Fetching data...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    }

    fetchData();
   ```

   - **Explanation**:
     - In this step, we define an `async` function called `fetchData` to encapsulate the asynchronous operations.
     - We use `await` with the `fetch` function to make the GET request and `await` the response and JSON parsing.

**3. Handling Errors:**

   Modify the script to handle errors by making a request to a non-existent URL.

   ```javascript
   // fetch_async_await_lab.js

   async function fetchData() {
     console.log("Fetching data...");

     try {
       const response = await fetch("https://jsonplaceholder.typicode.com/nonexistent");

       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }

       const data = await response.json();
       console.log("Fetched data:", data);
     } catch (error) {
       console.error("Error:", error);
     }
   }

   fetchData();
   ```

   - **Explanation**:
     - In this step, we intentionally make a request to a non-existent URL to trigger an error.
     - We continue to use `async/await` to handle the error using the `try...catch` block.

**4. Experiment and Questions:**

   - Modify the script to make multiple concurrent requests and observe the order of responses.
   - Reflect on the following questions in your lab report:
     - What is the purpose of `async/await` in asynchronous JavaScript?
     - How does `await` work with the Fetch API in Node.js?
     - How do you handle errors using `try...catch` with `async/await`?
   

This extended part is designed to help you learn how to use the Fetch API with `async/await` in Node.js to make HTTP requests and handle asynchronous operations. Understanding `async/await` is crucial for writing clean and readable asynchronous code in JavaScript.
