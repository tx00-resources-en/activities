# Activity 1 (Guided): 


## Part 1/2: Password hashing in Node.js with bcrypt

> [Ref](https://blog.logrocket.com/password-hashing-node-js-bcrypt/)

- What is password hashing?
- Password hashing in Node.js with bcrypt
- Examples of password hashing with bcrypt in Node.js
- Node.js bcrypt password hashing information
- Benefits of password hashing in Node.js with bcrypt

### What is password hashing?

Password hashing is turning a password into alphanumeric letters using specific algorithms. Hashing is beneficial when bad guys breach the data. With hashing, the data they get is in hash format, and hashed data is unintelligible. Some popular algorithms for password hashing include bcrypt and SHA.

In this tutorial, we’ll focus on using `bcrypt` to hash passwords in Node.js. Here’s an example of hashing plain text:

```sh
hash('HeypasswordIsSafe@') = 1b21hb2hb1u2gu3g2fxy1v2ux1v2y3vu12g4u3ggvgu43598sa89da98sd79adshuavusdva9sdguasd
```

### Password hashing in Node.js with bcrypt

**What is bcrypt?**

Bcrypt is a password hashing algorithm designed by Niels Provos and David Mazières based on the [Blowfish](https://en.wikipedia.org/wiki/Blowfish_(cipher)) cipher. The name “bcrypt” is made of two parts: b and crypt, where b stands for Blowfish and crypt is the name of the hashing function used by the Unix password system.

Bcrypt was created as a result of the failure of Crypt to adapt to technology and hardware advancement. Bcrypt is designed to be a slow algorithm, which is a good thing when it comes to password hashing. Therefore, bcrypt is perfect for password hashing because it reduces brute-force attacks.

**How does bcrypt work?**

Now, let’s dive into how bcrypt works. On the surface, bcrypt takes a user-submitted plain password and converts it into a hash. The hash is what is stored in the database. This prevents attackers from accessing users’ plain passwords in the event of a data breach. Unlike some other password-hashing algorithms that just hash the plain password, bcrypt uses the concept of salt.

This unique randomly generated string provides an additional level of security for a generated hash. Before the plain password is hashed, a salt is generated. Then, it is appended to the plain password, and everything is hashed (the plain password and salt). This help protects against rainbow table attacks because attackers can randomly guess users’ passwords, but they can’t guess the salt.

Bcrypt also uses a cost factor (or work factor) to determine how long it takes to generate a hash. This cost factor can be increased to make it slower as hardware power increases. The higher the cost factor, the more secure the hash and the slower the process. Therefore, you need to find the right balance between security and speed.

The generated hash will include the salt and other things, like the hash algorithm identifier prefix, the cost factor, and the hash. The hashing process is irreversible. The hash cannot be converted back to the original plain password. Therefore, to determine whether a user provides the correct password, the provided password is hashed (using the original salt) and compared against the hash stored in the database.

### Examples of password hashing with bcrypt in Node.js

It is important to salt and hash users’ passwords before storing them for data safety intents. Bcrypt turns a simple password into fixed-length characters called a hash. Before hashing a password, bcrypt applies a salt — a unique random string that makes the hash unpredictable. Let’s create a Node.js project and use bcrypt to hash passwords.

**Bcrypt dependencies**

Bcrypt needs some dependencies to function correctly. Bcrypt requires the node-gyp package, which compiles native add-on modules for Node.js. 

Create a file `app.js`, then install bcrypt:

```sh
$ mkdir bcrypt_demo
$ cd bcrypt_demo
$ npm init -y
$ npm install bcrypt 
```

Now, you are ready to work with bcrypt. Let’s import it and define saltRounds, as a cost or work factor:

```sh
const bcrypt = require("bcrypt")
const saltRounds = 10
const password = "Admin@123"
```

**Password encryption in Node.js using the JavaScript async promise**

The JavaScript Promise is an object returned by async function, which represents the current state. When the Promise is returned to the caller, it provides methods to handle the success or failure of the operation based on the condition. There are two methods for password encryption. Here’s the first method:

```js
async function testBcrypt() {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      console.log('Salt: ', salt);
      const hash = await bcrypt.hash(password, salt);
      console.log('Hash: ', hash);
    } catch (err) {
      console.error(err.message);
    }
}
```

First, we will create a salt using bcrypt’s genSalt function. Here, genSalt will take one argument as a saltRound number. Then, if it succeeds, we will provide the result to hash along with our password.

As a successful result, we will get the hash. In this method, we used JavaScript’s async promise.
You can see the output as shown below once you fire Node app.js:

```sh
Salt: $2b$10$wNE7MTs7/3aaHJnjvJMLwe
Hash: $2b$10$wNE7MTs7/3aaHJnjvJMLwe8l/tQubZyOEphIcjr8AxlN.St1wcRse
```

This hash will be stored in the database along with other details. One more thing, do you think I will get the result if I re-run the code? Will it generate the same output each time?

Obviously, not! The bcrypt.hash function will generate a unique hash based on special salt every time. That’s how it prevents rainbow table attacks.

**Auto-generating a salt and hash**

Now, let’s look at the second method of using the bcrypt library:
```js
async function testBcrypt2() {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      console.log('Hash2: ', hash);
    } catch (err) {
      console.error(err.message);
    }
  }
  
  // Call the testBcrypt2 function to execute it
testBcrypt2();
```

Here, we will only call the hash function. The hash function will only take the plain password and the saltRound. It will automatically generate the salt before generating the hash. This will also generate a unique hash each time.

**Using the bcrypt.compare function to hash passwords in Node.js**

Now, how will we validate that hash? This will be necessary to perform user logins. So, for that bcrypt, we have a `bcrypt.compare` function that will take care of that part.

> Check [demo.md](./demo.md)


### Node.js bcrypt password hashing information

As you see at the end, you’ll get a hash that is 60 characters long:

```sh
$\[algorithm]$[cost]$[salt\][hash]
// $2b$10$b63K/D03WFBktWy552L5XuibmiD5SxCrKg9kHCqOYaZwxRjIg14u2
```

The bifurcation of hash is like this:

- Algorithm: Will be "$2a$" or "$2b$" which means BCrypt
- Cost: Represents the exponent used to determine how many iterations 2^n
- Salt: (16-byte (128-bit)), base64 encoded to 22 characters
- Hash: (24-byte (192-bit)), base64 encoded to 31 characters

**Password hashing data costs**

Hashing data will go through a series of saltRounds, resulting in a secure hash that is unpredictable to any system or user. A module will then use a given value and perform 2^r.

Hashing options data costs generally refer to the time one hash round takes, which depends on the system’s hardware. On a 2GHz core processor, you can roughly expect the following:

```text
rounds=8 : ~40 hashes/sec
rounds=9 : ~20 hashes/sec
rounds=10: ~10 hashes/sec
rounds=11: ~5  hashes/sec
rounds=12: 2-3 hashes/sec
rounds=13: ~1 sec/hash
rounds=14: ~1.5 sec/hash
rounds=15: ~3 sec/hash
rounds=25: ~1 hour/hash
rounds=31: 2-3 days/hash
```
### Benefits of password hashing in Node.js with bcrypt

Bcrypt has significant advantages over other hashing methods like MD5, SHA1, SHA2, and SHA3. They can all perform hashing of a large number of data in less time. Suppose an attacker has a robust system capable of trying 700-900 million passwords in seconds. Your password containing alphanumeric and special character values will be cracked in a few seconds.

So, now you know that all of these hashing methods cannot be used to encrypt the password. Now, the main question is, how does bcrypt provide a significant advantage here? Bcrypt was built upon Blowfish keying schedule and used a work factor, which decides how expensive the hash function will be. After knowing it, bcrypt will get slower if an attacker makes multiple requests in a single time frame. So generally, cracking one password will take 12 damn years. Also, bcrypt uses salt, which helps prevent attacks like rainbow table attacks and is suitable for securing passwords.
Conclusion

As you know, it is crucial to secure data to avoid significant damage. An attacker may find a way to access your data storage, but well-encrypted passwords are a waste of time and effort for an attacker. They won’t get any benefits from our encrypted data.

Node.js allows us to use bcrypt without any hurdles. There is no reason to avoid it when dealing with users’ passwords and other sensitive data. A secure hashing function such as bcrypt should be necessary to make a robust system. I suggest you use it to store passwords. You won’t have to deal with problems exposing users’ sensitive information if you have done hashing using bcrypt.


## Part 2/2

Go through this [code](https://github.com/iamshaunjp/MERN-Auth-Tutorial/blob/lesson-14/backend/models/userModel.js)

## Related Links

- https://blog.logrocket.com/building-a-password-hasher-in-node-js/
- https://blog.logrocket.com/tag/node/