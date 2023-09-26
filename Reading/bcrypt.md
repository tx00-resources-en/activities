# Using bcrypt for Secure Password Management

Ensuring robust password security practices is paramount in web development. In this article, you will discover how to employ the bcrypt package to implement these practices effectively. By the end, you will be equipped to:

- Understand what bcrypt is.
- Install and import the bcrypt package.
- Salt and hash a password using bcrypt.
- Compare a salted and hashed password with a plain-text password.

## Understanding bcrypt

While you now comprehend the concepts behind salting and hashing passwords, it is highly discouraged to attempt to create your own custom code for implementing these security measures. Crafting your own algorithms may lead to vulnerabilities, as attackers can potentially decipher them. Instead, it is advisable to consistently employ trusted, up-to-date algorithms for salting and hashing in your applications.

**bcrypt**, pronounced as "bee-kript," stands as a dependable hashing algorithm that we advocate for use at App Academy to salt and hash passwords.

**bcryptjs** is the Node.js module used to implement the bcrypt hashing algorithm within Node.

## Installing bcrypt

To harness bcrypt in a Node.js project, you must initially install the npm package, **bcryptjs**.

```bash
npm install bcryptjs
```

Next, import bcrypt into your JavaScript file:

```javascript
const bcrypt = require('bcryptjs');
```

## Salting and Hashing a Password Using bcrypt

Once you've successfully imported bcrypt, you can utilize the following syntax to generate a salted and hashed password:

```javascript
const saltedAndHashedPassword = bcrypt.hashSync(plainTextPassword);
```

The `hashSync` method simplifies the process of generating a salted and hashed password. It requires a plain-text password as a mandatory parameter and defaults to using a salt with 10 random characters (unless you specify a different number as the second optional argument).

The method begins by generating a random salt, appending it to the plain-text password, and then hashing the result. It returns the salted and hashed password. For more details, consult the [hashSync method documentation](https://www.npmjs.com/package/bcryptjs#hashsync).

## Comparing a Salted and Hashed Password with User Input

After salt and hash a password with bcrypt, you can securely store it in your database. Each time a user attempts to log in with their password (provided as plain text), you must compare it with the salted and hashed version stored in the database to determine if they match.

For this comparison, you can employ bcrypt's `compareSync` method:

```javascript
bcrypt.compareSync(plainTextPassword, saltedAndHashedPassword);
```

This method assesses the plain-text string entered in the login form against the salted and hashed password from the database. It returns a Boolean value, indicating whether they are equivalent.

- If the function returns `true`, you have successfully authenticated the user, granting them access to resources.
- If the function returns `false`, authentication has failed. In this scenario, you should inform the user of the login issue and offer them the opportunity to retry.

## Key Takeaways

In this article, you have acquired the knowledge and syntax required to employ bcrypt effectively for implementing best practices in password security. This includes salting and hashing passwords before storage and comparing stored data with user input.

While you might be tempted to create your custom algorithms for password salting and hashing, this practice is discouraged. Trusting bcrypt to handle this critical security task is the preferred approach, as it ensures robust protection against potential threats.

## Ref

- appacademy.io