# Salting Passwords for Enhanced Security

Hashing passwords before storing them can bolster security, but it has a limitation—identical passwords yield the same hashed output, making them susceptible to Rainbow Table Attacks. This article explores the technique of salting passwords before hashing, which mitigates this risk. You will gain insights into:

- The salting process
- The distinctions between salted and hashed passwords and solely hashed passwords
- The enhanced security of storing salted and hashed passwords

## The Salting Process

Salting involves appending a randomly generated string of characters to a plain-text password before using it as input for the hashing function. The salt itself comprises the string of characters added to the password. Key points to note about salting:

- Salts are typically 32 characters or longer.
- Salts can be added at the beginning, end, or middle of a password.
- Salts are applied before hashing:

```sh
    // Most common way of applying a salt
    hashInput = salt + plainTextPassword
    hashOutput = hashingFunction(hashInput)
```

For instance, if the original plain-text password is "password," the salted version might appear as "shueowbofnesosnwkrnrekeneldenekepassword." While the plain-text password is still recognizable, the 32-character salt has been prefixed to it.

## Salted and Hashed Passwords vs. Hashed Passwords

Consider a user employing the weak password "password." In the previous article, we observed that if multiple users utilized this same password, their stored hashed passwords would be identical, creating vulnerability to a potential Rainbow Table attack.

Note: The examples in this article employ simplified salts and hashing functions for visual clarity. Real-world salts and hashing functions are far more complex.

| USER | PLAIN-TEXT-PASSWORD | HASHED-PASSWORD |
|------|---------------------|-----------------|
| 1    | "password"          | "apssowdr"      |
| 2    | "newPassword"       | "enPwsawsrod"   |
| 3    | "password"          | "apssowdr"      |

However, by introducing a random salt to the password before hashing, identical passwords yield different outputs:

| USER | PLAIN-TEXT-PASSWORD | SALTED-PASSWORD  | SALTED-AND-HASHED-PASSWORD |
|------|---------------------|-------------------|-----------------------------|
| 1    | "password"          | "jhsdfpassword"  | "hjdspfsawsrod"            |
| 2    | "newPassword"       | "nwsifpnewPassword" | "wnispfenPwsawsrod"       |
| 3    | "password"          | "ksiblpassword"  | "skbiplsawsrod"            |

In this simplified example, salted and hashed passwords no longer produce identical outputs, further reducing susceptibility to Rainbow Table attacks. To enhance security, multiple rounds of salting and hashing can be employed, rendering it highly improbable for identical outputs to exist in a Rainbow Table after this process.

To decipher the original plain-text password, a hacker would need to match the exact salt, in the precise position, with the plain-text password to generate an identical result to an entry in their Rainbow Table. This requires various attempts, such as:

- `saltedAndHashedPassword === hashingFunction(salt + password);`
- `saltedAndHashedPassword === hashingFunction(password + salt);`
- `saltedAndHashedPassword === hashingFunction(password.slice(0, 4) + salt + password.slice(4));`
- ...and so forth.

## Key Takeaways

Salting passwords before hashing them is a best practice to thwart Rainbow Table attacks and enhance security, particularly for users with common passwords. While this approach significantly enhances security, it may still be vulnerable to attacks by malicious users employing tools like [John the Ripper](https://www.openwall.com/john/), which employ machine learning to deduce plain-text passwords from leaked salted and hashed passwords.

To bolster security, it is imperative to NEVER expose salted and hashed passwords to clients. 

## Ref

- appacademy.io