# Backend: Week 1

### Preparation

Here's a list of tasks to help you get ready for class.
- .
- . 

### Topics 

- Traditional vs. Single-Page Applications
- Introduction to React: 
  - Building Your First Components
  - JSX

### Tentative Timeline

- Mini lecture (~35min)
- Group / Pair programming (~35min)
- Break (~15min)
- Mini lecture (~35min)
- Group / Pair programming (~35min)

---

### Traditional vs. Single-Page Applications

- **Traditional Approach:**
  - Full page reloads for every interaction
  - Disjointed user experience
  - Slow performance
- **Single-Page Applications (SPAs):**
  - Dynamically update content on the same page
  - Seamless, interactive user experience
  - No need for complete page refreshes

### Need forDOM and Role of AJAX

- **Document Object Model (DOM):**
  - Represents webpage structure as a tree of objects
  - Enables real-time content manipulation
  - Integral to SPAs for dynamic content rendering
- **Asynchronous JavaScript and XML (AJAX):**
  - Exchange data asynchronously between client and server
  - Avoid full page reloads
  - Enables dynamic content loading and responsive interfaces
- **Benefits of Dynamic Content Loading:**
  - Fetch specific data using AJAX
  - Update content without full page reloads
  - Reduces loading times, improves user engagement

### Birth of React: A Game Changer
- JavaScript library for building user interfaces
- Introduces the Virtual DOM
- Optimizes performance by minimizing DOM updates

### Advantages of Using React

- **Component-Based Architecture:**
   - Reusable and self-contained UI components
   - Code modularity and scalability
- **Reusable and Modular UI Building:**
   - Create and reuse UI components
   - Consistent user experience, accelerated development

### Recap

- **Revolutionizing User Experiences:**
  - SPAs transformed traditional web interactions
  - DOM and AJAX facilitate dynamic content loading
  - React's component-based approach reshapes UI development
- **Shaping the Future:**
  - As developers, we have the power to create immersive, responsive, and user-centric web applications


### [Activity 1]

- E

<!-- 

- peda
- kicad

- there are 4 repos:
  - material/labs/question bank/ activities
  - we will use degit/ folder hierachy
  - make repo for submission

Small Fry: Lisa Brennan-Jobs by Lisa Brennan-Jobs 


https://syllabus.codeyourfuture.io/node/
- Preparation/question bank/Submission Deadline/Independent Study
- Readme
- activity 1 & 2
- Material
- slides
- demo  
- India fullstack  + 
- istikh send Stephan / paper (outsourcing)
- peda
-->
---

### Your First Component
- What is a Component?
- Role of Components in React Applications
- Writing Your First React Component
  ```jsx
  import React from 'react';

  function MyComponent() {
    return (
      <div>
        {/* JSX Markup */}
      </div>
    );
  }

  export default MyComponent;
  ```
  
### Importing and Exporting Components
- Root Component File
- Importing and Exporting Components
  - Default vs. Named Imports and Exports
  ```jsx
  // Named Export
  export function ComponentA() { /* ... */ }

  // Default Export
  export default function ComponentB() { /* ... */ }
  ```
- Importing Multiple Components from One File
- Splitting Components into Multiple Files
  - Organizing Project Structure

### Writing Markup with JSX
- Mixing Markup and Rendering Logic
- JSX vs. HTML
- Displaying Information with JSX
  ```jsx
  const data = "Hello, React!";
  const element = <p>{data}</p>;
  ```

### JavaScript in JSX with Curly Braces
- Passing Strings with Quotes
- Referencing JavaScript Variables in JSX
  ```jsx
  const name = "Alice";
  const greeting = <p>Hello, {name}!</p>;
  ```
- Calling JavaScript Functions in JSX
- Using JavaScript Objects in JSX
- Double Curlies: Including CSS and Other Objects in JSX
  ```jsx
  const styles = { color: 'blue', fontSize: '16px' };
  const styledElement = <p style={styles}>Styled Text</p>;
  ```

### Recap
- Recap of Key Concepts Covered
- Building a Strong Foundation in React
- Stay Excited to Learn More!

### [Activity 2]

- U

---

### Study Material
- [SPA]
- [React]
- [JSX]








<!-- Links -->
[SPA]:https://github.com/tx00-web/material/Frontend-related/spa.md
[React]:https://github.com/tx00-web/material/Frontend-related/react-intro.md
[JSX]:https://github.com/tx00-web/material/Frontend-related/react-jsx.md
[Activity 1]:https://github.com/tx00-web/labs/fe-react
[Activity 2]:https://github.com/tx00-web/labs/fe-react-jsx
