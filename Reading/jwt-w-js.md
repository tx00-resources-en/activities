# JWT in JavaScript

In this tutorial, you will learn how to implement and use JSON Web Tokens (JWTs) in your Express application to authorize users. By the end of this tutorial, you should be able to:

- Use JavaScript's built-in string methods to manually parse, encode, and decode information.
- Generate a secret token using Node.js's crypto cryptographic library.
- Install and use the `jsonwebtoken` package to sign, decode, and verify a JWT.

## Parsing, Encoding, and Decoding with JavaScript

When you work with a JWT, the token you are working with is just a string. The string has a header, payload, and a signature, all separated by periods:

```sh
// JWT format
`${header}.${payload}.${signature}`
```

The actual token might look like this:

```plaintext
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ.SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA
```

### Parsing a JWT

You can use the `String.split()` method to split the string at each period and return an array. Each element in the returned array will be a different section of the JWT, and this array can be destructured to isolate the three sections.

```javascript
// Parsing a JWT
const sampleJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ.SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA";

const jwtArray = sampleJwt.split(".");
const [header, payload, signature] = jwtArray;

console.log(header);    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
console.log(payload);   // "eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ"
console.log(signature); // "SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA"
```

### Decoding a JWT

To decode the header and payload sections, you can use JavaScript's built-in `atob()` function, which decodes a Base64 encoded ASCII string and converts it back to a binary string.

```javascript
// Decoding a JWT's header and payload
const decodedHeader = atob(header);
console.log(decodedHeader);  // {"alg":"HS256","typ":"JWT"}

const decodedPayload = atob(payload);
console.log(decodedPayload); // {"email":"johnny@gmail.com"}
```

However, you cannot decode the signature in the same way because it is hashed and cannot be reversed.

### Encoding the JWT

To encode JWT content, you can use JavaScript's `btoa()` function, which converts a binary string into a Base64 encoded ASCII string.

```javascript
// Encoding header and payload content for the JWT
const encodedHeader = btoa(decodedHeader);
console.log(encodedHeader);   // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"

const encodedPayload = btoa(decodedPayload);
console.log(encodedPayload);  // "eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ=="
```

Basic JavaScript string methods can be used to parse the sections of a JWT and encode/decode the header and payload content. However, always remember that the payload is only encoded, not encrypted, and can be easily decoded if exposed. Therefore, sensitive information should never be placed in the payload.

## Signing the JWT

To create the JWT signature from the encoded header and payload, you can use a function from the built-in Node.js `crypto` cryptographic library:

```javascript
const signature = require('crypto')
  .createHmac('sha256', privateKey)
  .update(encodedHeader + '.' + encodedPayload)
  .digest('base64');
```

## Verify the JWT

To verify the signature, you can use the `verify()` function from the `jsonwebtoken` package. It involves decrypting the signature and checking that the secret is correct.

```javascript
const jwt = require('jsonwebtoken');

const payload = jwt.verify(token, secret);
// If the secret is verified, the payload is decoded and returned
// If the secret is not valid, a JsonWebTokenError is thrown
// If the token is expired, a TokenExpiredError is thrown
```

## Using Node Packages to Implement JWTs

When using JWTs in your user authorization flow, it's best practice to use Node packages to generate your secret token and handle encoding, decoding, hashing, and verification for you.

### Generate a Secret Token with `crypto`

Start by generating a strong secret token using Node.js's `crypto` cryptographic library:

```javascript
require('crypto').randomBytes(64).toString('hex');
```

Store this token securely in your environment variables (e.g., `.env` file) and never expose it in a public repository.

### Use `jsonwebtoken` to Manage JWTs

The `jsonwebtoken` package simplifies JWT management by allowing you to easily sign, decode, and verify JWTs.

First, install the package:

```bash
npm install jsonwebtoken
```

Then import it into your code:

```javascript
const jwt = require('jsonwebtoken');
```

### 1. Sign (Create) a JWT

Use the `sign()` function to create a JWT with a payload and the secret token you generated using `crypto`. You can also provide optional options to customize the token.

```javascript
const token = jwt.sign(payload, secret, options);
```

For example:

```javascript
const token = jwt.sign(
    { email: "johnny@gmail.com" }, // Payload
    process.env.SECRET_TOKEN,     // Secret token from environment variables
    { expiresIn: '1h' }           // Options (e.g., token expires in 1 hour)
);
```

### 2. Decode a JWT Payload

To decode a token, use the `decode()` function, which decodes the payload of the JWT.

```javascript
const payload = jwt.decode(token);
// Returns the decoded payload: {"email":"johnny@gmail.com"}
```

### 3. Verify a JWT

To verify a JWT's signature, use the `verify()` function. It checks that the payload information hasn't been tampered with and verifies the signature using the secret.

```javascript
const payload = jwt.verify(token, secret);
// If the secret is verified, the payload is decoded and returned
// If the secret is not valid, a JsonWebTokenError is thrown
// If the token is expired, a TokenExpiredError is thrown
```

When using JWTs for user authorization, you should handle successful and unsuccessful verifications accordingly.

## Wrapping Up

While JavaScript provides basic methods for parsing, encoding, and decoding JWTs, it's best practice to use Node modules and packages to manage this workflow. Use the `crypto

## Ref

- appacademy.io