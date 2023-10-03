#   Custom Hooks & localStorage

## Part 1/3: `useCounter` Custom Hook

**Objective:** In this part, you will work with custom hooks to manage counters and apply styling using CSS. You will start with a single counter and progressively refactor the code to handle three counters while adding styling for a visually appealing interface.

**Step 0: setup**

- Create a react app. Give it a suitable name
- In App.js add the following and test the counter

```jsx
const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        minus
      </button>      
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
}
```


**Step 1: Create the `useCounter` Custom Hook**
1. Create a new file called `useCounter.js`.
2. Inside `useCounter.js`, create a custom hook `useCounter` that handles the state for a single counter. It should include functions for incrementing, decrementing, and resetting the counter.

```javascript
// useCounter.js

import { useState } from 'react';

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
```

**Step 2: Create a Single Counter Component**
1. Create a new file called `SingleCounter.js`.
2. Inside `SingleCounter.js`, import React and the `useCounter` custom hook.
3. Create a component called `SingleCounter` that uses the `useCounter` hook to manage a single counter.
4. Style the component with CSS, adding classes for the counter display and buttons.

```javascript
// SingleCounter.js

import React from 'react';
import { useCounter } from './useCounter'; // Update the import path as needed
import './SingleCounter.css'; // Import your CSS file for styling

const SingleCounter = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div className="single-counter">
      <h2>Counter:</h2>
      <div className="counter-value">{counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default SingleCounter;
```

**Step 3: Create CSS for the Single Counter Component**
1. Create a new file called `SingleCounter.css`.
2. Inside `SingleCounter.css`, add CSS styles for the `single-counter` class to style the single counter component, including the counter display and buttons.

```css
/* SingleCounter.css */

.single-counter {
  text-align: center;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.counter-value {
  font-size: 24px;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  margin: 5px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

**Step 4: Create the App Component with Multiple Counters**
1. Open your `App.js` file and import React.
2. Create an `App` component that renders three instances of the `SingleCounter` component to display three counters.
3. Style the app container using CSS.

```javascript
// App.js

import React from 'react';
import SingleCounter from './SingleCounter'; // Update the import path as needed
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <SingleCounter />
      <SingleCounter />
      <SingleCounter />
    </div>
  );
};

export default App;
```

**Step 5: Style the App Component**
1. In your `App.css` file, add styles to the `app-container` class to style the app container that holds the three counters.

```css
/* App.css */

.app-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
}
```

**Test Your Application**
1. Run your React application using `npm start` or your preferred development environment.
2. Open your browser to see the three counters displayed with styling.

---
## Part 2/3:


**Objective:** In this lab, you will work with custom hooks to manage form input fields and apply CSS styling for a visually appealing form. You will start with a form using `useState` for managing input fields and progressively refactor it to use a custom hook called `useField`.


**Step 0: setup**

- Create a react app. Give it a suitable name
- In App.js add the following and test the counter

```jsx
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')
  const [height, setHeight] = useState('')

  return (
    <div>
      <form>
        name: 
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)} 
        /> 
        <br/> 
        birthdate:
        <input
          type='date'
          value={born}
          onChange={(event) => setBorn(event.target.value)}
        />
        <br /> 
        height:
        <input
          type='number'
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </form>
      <div>
        {name} {born} {height} 
      </div>
    </div>
  )
}
```

**Step 1: Create the `useField` Custom Hook**
1. Create a new file called `useField.js`.
2. Inside `useField.js`, create a custom hook `useField` that handles the state and change event for an input field.

```javascript
// useField.js

import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};
```

**Step 2: Refactor to Use the `useField` Custom Hook**
1. Create a new file called `AppWithCustomHook.js`.
2. Inside `AppWithCustomHook.js`, import React and the `useField` custom hook.
3. Create the `AppWithCustomHook` component that uses the `useField` hook to manage the state of three input fields: name, birthdate, and height.
4. Style the form and input fields with CSS.

```javascript
// AppWithCustomHook.js
import React from "react";
import useField from "./useField"; // Assuming you've created the useField custom hook
import "./App.css"; // Import your CSS file for styling

const App = () => {
  const nameInput = useField("text");
  const bornInput = useField("date");
  const heightInput = useField("number");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (if needed)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input {...nameInput} />
        </div>
        <div className="form-group">
          <label>Birthdate:</label>
          <input {...bornInput} />
        </div>
        <div className="form-group">
          <label>Height:</label>
          <input {...heightInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {nameInput.value} {bornInput.value} {heightInput.value}
      </div>
    </div>
  );
};

export default App;
```

**Step 3: Create CSS for the `AppWithCustomHook` Component**
1. In your CSS file (e.g., `App.css`), add styles to customize the look of the form and input fields for the `AppWithCustomHook` component.

```css
/* App.css */

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  input[type="text"],
  input[type="date"],
  input[type="number"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
```

**Test Your Applications**
- Run your React applications using `npm start` or your preferred development environment.
1. Test both versions of the form, one using `useState` and the other using the `useField` custom hook.


---
## Part 3/3:

Follow the steps in this [tutorial] to create a custom hook that allows saving items to the local storage


[tutorial]:https://reactpractice.dev/solution/tutorial-create-a-custom-hook-that-allows-saving-items-to-the-local-storage/