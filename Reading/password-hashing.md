# Password Hashing Tutorial

In this tutorial, you will gain insights into fundamental aspects of password security and the pivotal role you play in safeguarding your users' passwords. By the end of this tutorial, you will be equipped to:

- Understand the importance of never storing plain-text passwords.
- Grasp the mechanics of hash functions.
- Appreciate why hashing passwords is a crucial initial step in enhancing password security.

## The Perils of Plain-Text Passwords

For web application users, a cardinal rule of password security is never to reuse the same password across multiple websites. The rationale behind this rule is simple: if your password is ever exposed in plain text, it puts all your accounts that share that password at risk.

On the flip side, for developers, a paramount rule in password security is to never store passwords as plain text. Storing passwords in plain text creates a vulnerability whereby any developer with access to the production database can obtain a user's password and potentially misuse it, even with good intentions, such as updating user information. Regardless of intent, this constitutes a major security breach.

While the dangers of storing plain-text passwords are evident, it is surprising how many notable companies have made this mistake in the past. A quick look at a list of such offenders reveals examples from various industries, including travel, e-commerce, and higher education.

For instance, even Google, which generally adheres to best practices in password security, acknowledged in 2019 that a subset of its accounts had plain-text passwords stored. These plain-text passwords allowed account administrators to recover passwords for their team members, which, although convenient, constituted a security breach that required immediate investigation and rectification.

## Understanding Hash Functions

Today's standard for secure password storage involves both hashing and salting. This tutorial will focus on hashing, with another tutorial dedicated to salting.

Recalling from Module Two, a hash function is a mathematical operation that takes an input and produces an output. Two crucial characteristics of hash functions are:

1. The output cannot be reversed to obtain the original input.
2. Providing the same input to the hash function will consistently yield the same output.

Hashing a password entails passing plain text through a hash function to generate an output that represents the password. While the output cannot be reversed into plain text, rehashing the same plain-text password will consistently produce the same output.

This process can be illustrated in pseudocode:

```javascript
function hashingFunction(input) {
    // Complex logic to transform the input into the output
    return output;
}

const input1 = "password";
const input2 = "newPassword";
const input3 = "password"; // Same as input1

const hashedPasswords = [ 
    hashingFunction(input1), // "13p98oihgaskdhjf"
    hashingFunction(input2), // "fh23984hdk1o3"
    hashingFunction(input3)  // "13p98oihgaskdhjf" // Same as output of input1
];
```

In this example, if the first plain-text password (input1) were to be leaked, the third password (input3) would also be vulnerable because the matching outputs confirm that `input1 === input3`. This underscores the importance of using uncommon and unpredictable passwords as a user to minimize the risk of password sharing.

## The Significance of Hashing Passwords

Hashing passwords adds an extra layer of security. If a hashed password is leaked, it is challenging (though not impossible) to deduce the original plain-text password. As a developer, it is your responsibility to store hashed passwords instead of plain text, safeguarding your users against potential malicious actions by members of your development team or unauthorized access in case of data leaks.

As demonstrated in the example above, there are ways to deduce the input from a leaked hashed password, particularly if multiple outputs can be matched to the same input. Therefore, you must never expose hashed passwords.

Further insights into this topic will be provided in the next lesson, along with instructions on how to incorporate salting to enhance password security before storing them.

## Recap

In this tutorial, you have learned about the developer's responsibility to securely store passwords and the essential role that hashing plays in protecting user passwords, albeit not in isolation. Remember, never store plain-text passwords.

As a user of web applications, let this serve as a reminder to make wise choices when creating passwords. After completing your homework, consider reviewing your personal password habits:

- Are you using the same passwords across multiple websites?
- Do your passwords possess characteristics that make them easy to guess or potentially shared by others?
- Perhaps it's time to update and fortify your passwords!

## Ref

- appacademy.io