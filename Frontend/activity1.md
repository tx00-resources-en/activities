# `useState` hook. 


-  This lab consists of **four parts**. The last part is optional.
-  In this lab, we will set up a simple React app that displays a list of items and allows users to interact with the items using the `useState` hook. 


## Part 1
---

**Step 1: Project Setup**

Create a new React application. Please choose only **one** alternatives

- First method

Open your terminal and run:
```sh
npx degit tx00-web/react-starter#main useState-lab
cd useState-lab
```

- Second method
Open your terminal and run:

```sh
npx create-react-app useState-lab
cd useState-lab
```

**Step 2:** Navigate to the `src` folder and create a new file called `data.js`. This file will contain the initial data for our app.

**2. `data.js` (inside the `src` folder):**

```javascript
// data.js
const itemsData = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description for Item 1',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description for Item 2',
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'Description for Item 3',
  },
];

export default itemsData;
```

**3. `App.js` (inside the `src` folder):**

```javascript
import React, { useState } from 'react';
import './App.css';
import itemsData from './data';
import Review from './Review';

function App() {
  const [items, setItems] = useState(itemsData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Item List</h1>
      </header>
      <main>
        <section className="container">
          <div className="title">
            <h2>Items</h2>
          </div>
          <div className="item-list">
            {items.map((item) => (
              <Review key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
```

**4. `Review.js` (inside the `src` folder):**

```javascript
import React, { useState } from 'react';

const Review = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="review">
      <div className="item-info">
        <h4>{item.name}</h4>
        <button onClick={toggleDescription}>
          {expanded ? 'Hide Description' : 'Show Description'}
        </button>
      </div>
      {expanded && <p className="description">{item.description}</p>}
    </article>
  );
};

export default Review;
```

**5. CSS Styling (Optional):**

You can create a CSS file (e.g., `App.css`) to style your components as needed. For this example, I'll provide a simple CSS file to get you started:

```css
/* App.css */
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 1rem;
}

.review {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}

.item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description {
  margin-top: 1rem;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

**6. Run the App:**

To run the app, open your terminal, make sure you're inside the `useStateLab` directory, and then run:

```bash
npm start
```

This will start your React development server, and you can access the app in your web browser.

**Summary:**

This React lab demonstrates the use of the `useState` hook to manage the state of items in a simple item list. The `App.js` component fetches data from `data.js`, and the `Review.js` component displays individual items and toggles their descriptions using the `useState` hook. The CSS file (`App.css`) provides basic styling for the components. You can expand on this lab to explore more features and functionality with the `useState` hook.

## Part 2
---

In this additional step, we'll add a button to each item that allows users to remove the item from the list. Here's the updated code:

**1. `Review.js` (Updated):**

```javascript
import React, { useState } from 'react';

const Review = ({ item, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    onDelete(item.id); // Pass the item's ID to the parent component for deletion
  };

  return (
    <article className="review">
      <div className="item-info">
        <h4>{item.name}</h4>
        <button onClick={toggleDescription}>
          {expanded ? 'Hide Description' : 'Show Description'}
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
      {expanded && <p className="description">{item.description}</p>}
    </article>
  );
};

export default Review;
```

**2. `App.js` (Updated):**

```javascript
import React, { useState } from 'react';
import './App.css';
import itemsData from './data';
import Review from './Review';

function App() {
  const [items, setItems] = useState(itemsData);

  const handleDeleteItem = (itemId) => {
    // Filter out the item with the specified ID and update the state
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Item List</h1>
      </header>
      <main>
        <section className="container">
          <div className="title">
            <h2>Items</h2>
          </div>
          <div className="item-list">
            {items.map((item) => (
              <Review
                key={item.id}
                item={item}
                onDelete={handleDeleteItem}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
```

**3. CSS Styling (No Changes):**

The CSS styling remains the same as in the previous step.

In this update, we've added a "Delete" button to each item displayed by the `Review` component. When the "Delete" button is clicked, it triggers the `handleDeleteItem` function in the `App` component, which filters out the item with the specified ID from the `items` state array, effectively removing it from the list. This demonstrates how you can use the `setItems` function to update the state based on user interactions.


## Part 3
---

You can use the React Developer Tools browser extension to inspect the state and props of React components in your application. Here are instructions on how to use React Developer Tools to view the states and props of the `App` and `Review` components:

**1. Install React Developer Tools:**

- If you haven't already installed the React Developer Tools extension for your browser, you can download it from the official extension store:
  - [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [React Developer Tools for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
 

**2. Open Your React App:**

- Make sure your React application is running in your development environment.

**3. Open the Browser DevTools:**

- Open your browser's developer tools. You can usually do this by right-clicking on your web page and selecting "Inspect" or by pressing `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) on your keyboard.

**4. Navigate to the "React" Tab:**

- In the DevTools panel, look for a tab labeled "React" or "Components." Click on it to access the React Developer Tools.

**5. Inspect the `App` Component:**

- In the "React" tab, you should see a tree view of your component hierarchy. Find the `App` component in the tree and click on it to select it.

**6. View Component State and Props:**

- After selecting the `App` component, you should see two tabs: "Props" and "State." Click on the "Props" tab to view the props passed to the `App` component.

- To view the state of the `App` component, click on the "State" tab. Here, you can see the current state variables and their values.

**7. Inspect the `Review` Components:**

- In the tree view, you can expand the `App` component to see its child components, which are `Review` components in our case.

- Click on any `Review` component to select it.

**8. View Component Props:**

- After selecting a `Review` component, you can click on the "Props" tab to view the props passed to that specific `Review` component. This will show you the `item` prop passed to each individual `Review` component.

> Please note that you need to have your React application running in a development environment to see the component hierarchy and use the React Developer Tools effectively. Using these tools, you can inspect and debug the state and props of your React components, which can be immensely helpful during development and debugging.

## Part 4 (optional)
---

Try to replicate the functionality of the following apps.

Apply the concepts and techniques you learned during the lab to build these two apps. This includes using the `useState` hook for managing state, creating and styling components, and handling user interactions. You can use the provided examples as a reference, but make sure to adapt the functionality to match the requirements of the Birthday Reminder and Review apps.

1. **Birthday Reminder App**:
   - Create a React app that maintains a list of birthdays with names and dates. you can view an example in action:
  
      https://react-vite-projects-1-birthday-buddy.netlify.app/
  

2. **Review App**:
   - Develop a React app that showcases a list of reviews or testimonials.
   - Each review should include a person's name, job, an image (profile picture), and the review text.
   - Enable users to navigate through the reviews using "Next" and "Previous" buttons.
   - Add a "Surprise Me" button that randomly selects and displays a review.
  
      https://react-vite-projects-3-reviews.netlify.app/
   
3. Ref: https://github.com/john-smilga/react-projects

