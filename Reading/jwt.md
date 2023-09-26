# Understanding JSON Web Tokens (JWTs)

In this reading, you will delve into the world of JSON Web Tokens (JWTs) and discover how they facilitate information transmission. By the end, you will have a grasp of the following concepts:

- Differentiating between encoding, encrypting, and hashing information.
- Understanding what a JSON Web Token (JWT) is, including its three fundamental components.
- Exploring how the signature ensures the integrity of transmitted data.
- Listing the fundamental operations and common use cases for JWTs.

Before we proceed, a crucial note: JSON Web Tokens are generally referred to by their abbreviation, "JWT," pronounced as "jot," without the "W." Throughout this discussion, we'll use "JWT" when referring to JSON Web Tokens.

## Background Information

Before delving into JWTs, let's clarify the distinctions between encoding, encrypting, and hashing information. When working with JWTs, you'll primarily employ encoding and hashing (but not encryption) to transmit various types of data.

### Encoding vs. Encrypting vs. Hashing Information

1. **Encoding** serves to transmit information by converting characters that some systems may find difficult to interpret into readable characters. Encoding can be easily applied and reversed by anyone, without the need for a private or secret key.

2. **Encryption**, conversely, ensures that information remains intelligible only to those possessing the private key. A private key is necessary to encode the information before transmission, and the same key is required to decode it. Encryption permits the reversible transformation of data.

3. **Hashing** provides another method for transmitting information, but it does so in a manner that cannot be reversed to reveal the original data. Consequently, hashing is the most secure approach for information transmission because it is irreversible.

## How Hash Functions Work

Recall from Module Two that a hash function is a function taking an input and yielding an output. Two crucial aspects to remember are:

- The output CANNOT be reversed to derive the input, yet...
- Utilizing the same input in the hash function will ALWAYS yield the same output.

Hashing information entails processing plain text through a hashing function, resulting in an output representing the original plain text. While the output cannot be reverted to plain text, repeatedly hashing the same plain text input will consistently produce the same output.

Here's a pseudocode representation:

```javascript
function hashingFunction(input) {
    // Hidden logic to transform input into output
    return output;
}

const input1 = "password";
const input2 = "newPassword";
const input3 = "password"; // Same as input1

const hashedPasswords = [ 
    hashingFunction(input1), // "13p98oihgaskdhjf"
    hashingFunction(input2), // "fh23984hdk1o3"
    hashingFunction(input3)  // "13p98oihgaskdhjf" (Same as input1)
];

// NOTE: Hashing functions are highly complex; avoid writing your own!
```

## Conceptual Overview of a JWT: An Example

So, what exactly is a JWT? Let's gain a conceptual understanding through an example.

Imagine you're hosting a party, and only invited guests are allowed to attend. You want to ensure that uninvited guests cannot gain access, but you'd rather not maintain a guest list.

To achieve this, you devise a clever method for sending tamper-proof invitations. This method requires:

1. The guest's email address: A unique identifier for your guests, such as "johnny@gmail.com."
2. A secret key/password known only to you: In this case, let's use the secret password "ILoveDogs."
3. A [hashing function](https://developer.mozilla.org/en-US/docs/Glossary/Cryptographic_hash_function): This function combines the guest's email and your secret password to produce a unique string.

Here's what you do:

1. Take Johnny Rocket's email address (johnny@gmail.com) and your secret password (ILoveDogs), and hash them using a SHA1 hashing function. This yields a string digest like "a94a45d3d125a25ef69775ff702406a8848633c3."

2. Send an email to Johnny with the following message:

   ```
   Dear Johnny,

   My party is this Friday. Present this code at the door:

   "johnny@gmail.com/a94a45d3d125a25ef69775ff702406a8848633c3"
   ```

3. When Johnny arrives at your party, he presents you with "johnny@gmail.com/a94a45d3d125a25ef69775ff702406a8848633c3." You take Johnny's email (the first part of the code) and hash it again with your secret password. You then compare the output with the second part of the code (the string digest) Johnny presents. If they match, you know the invite is valid and untampered because the string digest couldn't exist without your secret key.

This concept of validating a "code" against the hashed output of a value and a secret password is essentially how a JSON Web Token (JWT) functions.

## Anatomy of a JWT: Three Components

Now that you have an understanding of how an email address, secret key, and hashing function can validate invites, let's translate this to comprehend how JWTs are used in user authorization.

A JSON Web Token is an internet standard defining JSON-based access tokens. These tokens serve as a means to identify that a user is logged in without requiring the server to store additional information. This is possible because the contents of the JWT can be read easily, yet it can always be verified that the information within the JWT remains untampered.

A JWT comprises three key parts: the header, the payload, and the signature.

![JWT Anatomy](./jwt.png)

If you examine the left side of the image above, you'll see the typical format of a JWT. These three JWT parts are separated by periods.

While the JWT may appear complex, the first two parts are merely base64 encoded. The right side of the image displays the base64 decoded versions of the first two JWT parts. We'll delve deeper into these parts in the sections below.

## The Header

The header specifies the hashing algorithm used by the

 JWT, as well as the token's type.

```json
{
  "alg": "HS256", // The specific hashing algorithm used (HS256)
  "typ": "JWT"    // The type of token (JWT)
}
```

In this case, HMAC + SHA256 (HS256) is used as the algorithm to sign the JWT. It's important to note that the header is Base64 encoded, not encrypted or hashed. Consequently, anyone can decode and read it.

## The Payload

The payload represents the data stored in the token, formatted as a JSON string. Like the header, it is also Base64 encoded, making it readable by anyone. For this reason, it's crucial not to include sensitive information in the payload, such as a user's Social Security Number or other confidential account data.

## The Signature

To recap, everything contained in the header and payload is encoded, not encrypted or hashed.

The signature is the part of the JWT that employs hashing, verifying that the data within the payload remains intact. The signature does not safeguard the payload from exposure; its sole purpose is to confirm the source of the JWT (the entity that created it).

The signature is a hash of the header, the payload, and a secret key. Typically, the HS256 hashing algorithm is used.

## Exploring the Full JWT

Remember, the three parts of the JWT are separated by periods, as shown in the format below:

```plaintext
${header}.${payload}.${signature}
```

Incorporating this format into our earlier example, a JWT following the party invite analogy might resemble this:

```plaintext
// Each section is separated by a period:

base64Encode({ "alg": "HS256", "typ": "JWT" }) // Header
  .base64Encode({ "email": "johnny@gmail.com" }) // Payload
  .SHA1HASH(header + payload + "ILoveDogs") // Signature

// Final JWT
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 // Encoded header
  .eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ // Encoded payload
  .SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA // Hashed signature
```

Online encoding and decoding tools can be used to explore this example JWT. Visit the [jwt.io](https://jwt.io) sandbox, and select "HS256" from the algorithm dropdown.

Paste the full JWT into the input box on the left side:

```plaintext
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ.SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA
```

You should immediately see a red "Invalid Signature" message below the input box.

Now, look at the right side of the screen. You should see the decoded header and the decoded payload, which is `{"email": "johnny@gmail.com"}`.

Scroll down to the "Verify Signature" section. The signature was invalid because you did not input the secret key "ILoveDogs." Enter this key in the input box with the placeholder text "your-256-bit-secret," and you'll see that the signature is now verified.

Feel free to experiment in the sandbox. What happens if you use a different secret key or alter the payload?

Ultimately, a JWT enables user identification by storing identifying data in the payload and confirming the information's validity by comparing two hashes. You can hash the header, payload, and secret key and check if the new hash matches the original hash precisely.

## JWT Operations and Use Cases

Now that you comprehend the three JWT components and have explored the sandbox, you are prepared to explore fundamental JWT operations and how to execute them in JavaScript. In the following article, you'll learn how to create your JWTs (also known as signing the JWT) and how to verify them. These operations will enable you to use JWTs for user authorization and secure information transmission.

## Ref

- appacademy.io