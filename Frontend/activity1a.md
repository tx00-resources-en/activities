# Understanding useReducer in React: A Comprehensive Guide

React's `useReducer` is a powerful tool that allows you to manage state in a more organized and efficient way, especially when dealing with complex state logic. This guide will walk you through the concept of `useReducer`, its advantages, disadvantages, and provide real-world examples of how to refactor code from `useState` to `useReducer`.

## What is `useReducer`?

In React, `useReducer` is a built-in Hook that enables you to manage state using a reducer function. A reducer function is a pure function that takes the current state and an action as arguments and returns the new state. It's a way to encapsulate state updates into a single, well-structured function.

## Setup 

Create a new React application. Please choose only **one** alternatives

- First method

Open your terminal and run:
```sh
npx degit tx00-web/react-starter#main useReducer-lab
cd useReducer-lab
npm install
```

- Second method using CRA
Open your terminal and run:

```sh
npx create-react-app useReducer-lab
cd useReducer-lab
npm install
```

- Third method using Vite
Open your terminal and run:
```sh
npx degit tx00-web/vite-template#main useReducer-lab
cd useReducer-lab
npm install
```


## Refactoring Process: From `useState` to `useReducer`

Let's walk through the process of refactoring code from `useState` to `useReducer`. We'll start with a simple example and then move on to a more complex one.

### Simple Example: Counter Component

Here's a simple Counter component using `useState`:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="Counter">
      <h1>Counter</h1>
      Count: {count}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
```

To refactor this code to use `useReducer`, follow these steps:

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Counter">
      <h1>Counter</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
```

In this refactored code, we've defined an initial state object, `{ count: 0 }`, and a reducer function that handles two actions: `INCREMENT` and `DECREMENT`. We then use `useReducer` to initialize our state and dispatch function and use them to update the state when the user clicks on the buttons.

> Note that you can style the counter e.g:

```css
/* App.css */
.Counter {
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  
  .Counter h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .Counter p {
    font-size: 18px;
    margin-bottom: 15px;
  }
  
  .Counter button {
    font-size: 18px;
    padding: 5px 15px;
    margin: 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .Counter button:hover {
    background-color: #0056b3;
  }
```

### Advanced Example: Shopping Cart

Let's explore a more complex example by refactoring a shopping cart component that uses `useState`. This example involves managing an array of items and calculating the total price.

Here's the original code using `useState`:

```jsx
import { useState } from "react";
import './App.css'

function ShoppingCart() {
  const [cart, setCart] = useState({
    items: [],
    total: 0
  });

  function handleAddItem(item) {
    const nextItemId = cart.items.length + 1;

    setCart((prevCart) => ({
      items: [
        ...prevCart.items,
        {
          id: nextItemId,
          ...item
        }
      ],
      total: prevCart.total + item.price
    }));
  }

  function handleRemoveItem(item) {
    setCart((prevCart) => ({
      items: prevCart.items.filter((i) => i.id !== item.id),
      total: prevCart.total - item.price
    }));
  }

  function handleClearCart() {
    setCart({
      items: [],
      total: 0
    });
  }

  return (
    <div className="shopping-cart">
      <h1 className="h1">Shopping Cart</h1>

      <button onClick={() => handleAddItem({ name: "Apple", price: 1 })}>
        Add Apple
      </button>
      <button onClick={() => handleAddItem({ name: "Orange", price: 2 })}>
        Add Orange
      </button>
      <button onClick={() => handleClearCart()}>Clear cart</button>

      <p>Total: ${cart.total}</p>

      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button  className="del-button" onClick={() => handleRemoveItem(item)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
```

Now, let's refactor this code to use `useReducer`:

```jsx
import { useReducer } from "react";
import './App.css'

// Define an initial state
const initialState = {
  items: [],
  total: 0
};

// Define a reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const nextItemId = state.items.length + 1;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: nextItemId,
            ...action.payload
          }
        ],
        total: state.total + action.payload.price
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

function ShoppingCart() {
  // Use useReducer to manage state and dispatch
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const handleAddItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const handleRemoveItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="shopping-cart">
      <h1 className="h1">Shopping Cart</h1>

      <button onClick={() => handleAddItem({ name: "Apple", price: 1 })}>
        Add Apple
      </button>
      <button onClick={() => handleAddItem({ name: "Orange", price: 2 })}>
        Add Orange
      </button>
      <button onClick={handleClearCart}>Clear cart</button>

      <p>Total: ${cart.total}</p>

      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button className="del-button" onClick={() => handleRemoveItem(item)}>
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
```

In the advanced example, we've refactored the shopping cart component to use `useReducer`. We've defined an initial state object and a reducer function that handles actions like `ADD_ITEM`, `REMOVE_ITEM`, and `CLEAR_CART`. We use `useReducer` to initialize the state and dispatch function, and we use these to update the state based on user interactions.

> Note that you can style the counter e.g:

```css
/* Container styles */
.shopping-cart {
    font-family: Arial, sans-serif;
    margin: 20px auto;
    padding: 20px;
    max-width: 400px;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 8px;
}
  
  /* Heading styles */
h1 {
    font-size: 24px;
    text-align: center;
  }
  
  /* Buttons styles */
button {
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Total styles */
 p {
    font-size: 18px;
    text-align: center;
    margin: 20px 0;
  }
  
  /* Item list styles */
ul {
    list-style-type: none;
    padding: 0;
  }
  
li {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  
/* Remove button styles */
button.del-button {
    background-color: #ff6347;
}
```


## Benefits and Drawbacks:

Refactoring the `ShoppingCart` component to use `useReducer` offers several benefits and drawbacks:

**Benefits:**

1. **Improved State Management:** `useReducer` provides a centralized and structured way to manage complex state logic. It makes it easier to understand and maintain the state of your component, especially as it grows more complex.

2. **Predictable State Updates:** The reducer function ensures that state updates are predictable and follow a consistent pattern. Each action type corresponds to a specific state change, making it easier to reason about how the state transitions.

3. **Code Separation:** With `useReducer`, you separate the state management logic from the component's rendering logic. This separation of concerns can improve code readability and maintainability.

4. **Testing:** Testing reducer functions is straightforward because they are pure functions. You can test them in isolation, which makes your code more testable.

**Drawbacks:**

1. **Learning Curve:** `useReducer` may have a steeper learning curve, especially for developers who are new to the concept of reducers. It introduces additional complexity compared to `useState`, which can be overkill for simple state management.

2. **Verbose Code:** Using `useReducer` often results in more lines of code compared to `useState`. This increased verbosity can make the code harder to read, especially for simple state updates.

3. **Boilerplate:** Reducer functions typically involve switch statements, which can add some boilerplate code to your component. In some cases, this boilerplate might make your code less concise.

4. **Potential Overhead:** For small and simple components, introducing `useReducer` may introduce unnecessary overhead. If your component doesn't have complex state management needs, sticking with `useState` could be more straightforward.

In summary, refactoring to use `useReducer` is most beneficial when you have a complex state management scenario or need to maintain a predictable state transition in a larger application. However, for simple components or when the learning curve and increased verbosity outweigh the benefits, using `useState` may be more appropriate. The decision should be based on the specific requirements and complexity of your application.


## Original source:

https://edvins.io/how-to-efficiently-refactor-use-state-to-use-reducer-in-react