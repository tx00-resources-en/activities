**Steps:**

**Step 1: Setting Up Your Project**
1. Create a new folder for your project.
2. Open a terminal and navigate to your project folder.
3. Initialize a new Node.js project by running the following command:
```sh
npm init -y
```
4. Install the `bcrypt` library by running:
```sh
npm install bcrypt
```

**Step 2: Create a JavaScript File**
1. Create a JavaScript file (e.g., `bcrypt_lab.js`) in your project folder.

**Step 3: Import the `bcrypt` Library**
```javascript
const bcrypt = require('bcrypt');
```

**Step 4: Generating a Salt and Hashing a Password**
```javascript
// Function to hash a password
async function hashPassword() {
  const password = 'mySecurePassword'; // Replace with your password

  try {
    // Generate a salt with 10 rounds (you can adjust this number)
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('Password:', password);
    console.log('Salt:', salt);
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to hash the password
hashPassword();
```

**Step 5: Comparing a Password with a Hash**
```javascript
// Function to compare a password with a hash
async function comparePassword() {
  const inputPassword = 'mySecurePassword'; // Replace with the password you want to compare
  const hashedPassword = 'yourStoredHashedPassword'; // Replace with a hashed password stored in your application

  try {
    // Compare the input password with the stored hashed password
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

    if (isMatch) {
      console.log('Password is correct.');
    } else {
      console.log('Password is incorrect.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to compare the password
comparePassword();
```

**Step 6: Running the Lab**
1. Open your terminal and navigate to your project folder.
2. Run the lab by executing the JavaScript file:
```sh
node bcrypt_lab.js
```

This lab demonstrates how to generate a salt, hash a password, and compare a password with a stored hash using the bcrypt library in JavaScript. You can experiment with different passwords and salt rounds to see how the hash and comparison processes work.