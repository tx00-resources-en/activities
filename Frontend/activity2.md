# Lab: Creating a Multi-Page Web Application with React Router v6


-  This lab consists of **four part**s. The first three parts are guided, with step-by-step instructions. Once you've completed these sections, you should have the knowledge and skills to independently complete the fourth part.
- **Objective:** In this lab, you will learn how to set up a multi-page web application using React Router v6. 

## Part 1
---

**Step 1: Project Setup**

Create a new React application. Please choose only **one** alternatives

- First method

Open your terminal and run:
```sh
npx degit tx00-web/react-starter#main react-router-example
cd react-router-example
```

- Second method
Open your terminal and run:

```sh
npx create-react-app react-router-example
cd react-router-example
```

**Step 2: Install React Router**

In the project directory, install React Router using npm:

```sh
npm install react-router-dom@latest
```

**Step 3: Create Navigation and Components**

1. Inside the `src` directory, create a new folder called `components`.

2. Create the following components inside the `components` folder:
   - `Home.js`
   - `About.js`
   - `Contact.js`

3. In each component, add some content. For example:

```jsx
// Home.js

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
    </div>
  );
}

export default Home;
```

Repeat the same for `About.js` and `Contact.js` components:


```jsx
// src/components/About.js

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Learn more about our company.</p>
    </div>
  );
}

export default About;
```

```jsx
// src/components/Contact.js

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Reach out to us for inquiries.</p>
    </div>
  );
}

export default Contact;
```

**Step 4: Create Navigation**

6. Create a `Navigation.js` component for site navigation:

- Inside the `components` directory, create `Navigation.js`:

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
 return (
<nav>
<ul>
 <li>
<Link to="/">Home</Link>
 </li>
 <li>
<Link to="/about">About</Link>
 </li>
 <li>
<Link to="/contact">Contact</Link>
 </li>
</ul>
</nav>
 );
}

export default Navigation;
```

**Step 5: Set Up Routing**

7. Open your main `App.js` file and set up routing:

```jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
return (
 <BrowserRouter>
<Navigation />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
 </BrowserRouter>
);
}

export default App;
```

**Step 6: Start the Development Server**

8. Run your React development server:
```
npm start
```

9. Open your web browser and navigate to `http://localhost:3000`.

**Step 7: Test Your Application**

10. Click on the navigation links to test if the routing works correctly. You should see the content of the respective pages.

**Step 8:  Handling 404 Errors**

11. Create a new file named `NotFound.js` inside the `components` directory:

```jsx
function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
    </div>
  );
}

export default NotFound;
```

**Step 9: Update Routing**

12. Open your main `App.js` file and 

- First: Import the `NotFound` component `import NotFound from './components/NotFound'`;
- Second: Add the following route to include the "Not Found" component:

```jsx
// ... (previous code)

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Added this line */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Step 10: Test the "Not Found" Page**

1.  Save your changes and run the development server (**If it is not running already**):

```sh
npm start
```

14. Navigate to a URL that doesn't match any of the defined routes (e.g., `http://localhost:3000/nonexistent`).

15. You should see the "Not Found" page with a "404 - Not Found" message.


## Part 2:  How to handle nested routes
---

**Step 1: Create the Layout Component**

1. Inside the `components` folder, create a new file named `Layout.js`.

2. In `Layout.js`, import the necessary modules:

   ```javascript
   import { Outlet, Link } from "react-router-dom";
   ```

3. Create a functional component named `Layout`. This component will serve as the layout structure for your application:

```javascript
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />

      </>
    );
  };
  
  export default Layout;
```

In this component, we've created a navigation menu with links to different pages and included an `<Outlet />` where the route components will be displayed.

**Step 2: Update the App Component to Use the Layout**

1. Open your `App.js` file.

2. Import the `Layout` component at the top of your `App.js` file:

```javascript
import Layout from "./components/Layout";
```

3. Update the `App` component to use the `Layout` component as the layout for your routes:

```javascript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

We wrap the entire layout structure with the `<Layout />` component.

**Step 3: Testing**

1. Make sure your development server is running. You can start it with `npm start` or `yarn start`, depending on your setup.

2. Open your web browser and navigate to `http://localhost:3000`. You should see your updated app with the navigation menu provided by the `Layout` component.

3. Test the navigation links to ensure that the routing works as expected.


## Part 3: Add basic styles to the layout component
---

**Step 1: Add Styles**

1. In the `components` directory, create a new file named `Layout.css`.

2. Open `Layout.css` and add the following styles:

```css
   /* Layout Styles */
   nav {
     background-color: #333;
     color: #fff;
     padding: 1rem;
   }

   ul {
     list-style: none;
     padding: 0;
   }

   li {
     display: inline;
     margin-right: 1rem;
   }

   a {
     text-decoration: none;
     color: #fff;
   }

   /* Page Content Styles */
   main {
     padding: 2rem;
   }
```

These styles define a simple dark navigation bar and add some padding to the page content for better readability.

**Step 2: Link Stylesheet to Layout Component**

1. Open your `Layout.js` file.

2. Import the CSS file at the top of the `Layout.js` file:

```javascript
import "./Layout.css";
```

Make sure the path matches the location of your `Layout.css` file.

**Step 3: Applying Styles to Layout**

1. In your `Layout` component (`Layout.js`), add a `className` to the `nav` element to apply the styling:

   ```javascript
   <nav className="navbar">
     {/* ... */}
   </nav>
   ```

2. Similarly, you can add a `className` to the `main` element to style the page content:

```javascript
   <main className="page-content">
     <Outlet />
   </main>
 ```

The `Layout` file should look as follows:

 ```js
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";


const Layout = () => {
    return (
      <>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <main className="page-content">
          <Outlet />
        </main>
      </>
    );
  };
  
  export default Layout;
 ```

**Step 4: Testing**

1. Make sure your development server is running (`npm start` or `yarn start`).

2. Open your web browser and navigate to `http://localhost:3000`. You should see your updated app with the styled navigation bar and page content.

Now, your layout component has some basic styles applied to showcase its benefits, providing a more visually appealing user experience. You can further customize and enhance the styles as needed for your project.

## Part 4: 

1. Use Create React App or your preferred React project setup.
2. Implement at least three distinct pages (e.g., Home, Services, Blogs).
3. Use React Router v6 for routing.
4. Create separate components for each page.
5. Implement navigation between pages using `Link` components.
6. Add appropriate content to each page.
7. Add content and styles to each page.
8. Test your application to ensure navigation works correctly.
9. Optionally, add any extra features or enhancements to make your multi-page app more interesting.