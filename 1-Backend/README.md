# Backend: Week 1

### Preparation

Here's a list of tasks to help you get ready for class.
- .
- . 

### Topics 

- JavaScript Engines
- Node.js Fundamentals
- JavaScript
  - Functions are First-Class Citizens
  - Arrow functions

### Tentative Timeline

- Mini lecture (~35min)
- Group / Pair programming (~35min)
- Break (~15min)
- Mini lecture (~35min)
- Group / Pair programming (~35min)

---

### Browser Engines, JavaScript Engines

- [Browser Engines]
  - Rendering web content
  - Interaction with user interface
  - JavaScript engine as part of Browser Engines
  - Examples: [Blink], [Gecko], [WebKit]

- [JavaScript Engines]
  - Executes JavaScript code
  - Parses, compiles, and executes programs
  - Popular JavaScript engines: [V8], [SpiderMonkey]

-  [V8] JavaScript Engine
  - written in C++
  - Portable and runs on Mac, Windows, Linux
  - Modern JavaScript engines no longer just [interpret] JavaScript, they compile it.

### The Birth of [Node.js]

- JavaScript in the Browser
  - JavaScript's role in the browser environment
  - Limitations of client-side JavaScript
- Expanding Horizons with Node.js
  - Node.js as a server-side JavaScript platform
  - Utilizing V8 to run JavaScript on servers
- REPL
- Scripts

### [Activity 1]

- Exploring Node.js REPL (Read-Eval-Print Loop)
- Creating and Using Node.js Scripts
- Creating and Using Custom Modules


---

### Node.js Architecture

- Overview of Node.js architecture
- Event Loop
- Core Modules (e.g., 'fs', 'os')
- Demo using core modules

### [Node.js]: Key Features and Advantages

- Non-blocking I/O operations
- Single-threaded events loop model

### Variables 

-  `console.log()`
- [var, let, const]
- Scope

### JS: Arrow functions

- What are Arrow Functions?
  - Arrow function advantages: shorter syntax and lexical this
- Syntax and Usage
  - Handling parameters
  - Handling the function body
  - Implicit return with arrow functions
- Comparison with traditional function expressions

### [Activity 2]

- Using `let` and `const` Instead of `var`
- Refactoring Regular Functions to Arrow Functions
- Built in modules: `os` module

---

### Study Material
- [JS Engines]
- [Node Intro]
- [Arrow Functions]
- [Functions]
















<!-- Links -->
[Browser Engines]:https://en.wikipedia.org/wiki/Browser_engine
[Blink]:https://en.wikipedia.org/wiki/Blink_(browser_engine)
[Gecko]:https://en.wikipedia.org/wiki/Gecko_(software)
[WebKit]:https://en.wikipedia.org/wiki/WebKit
[JavaScript Engines]:https://en.wikipedia.org/wiki/JavaScript_engine
[V8]:https://en.wikipedia.org/wiki/V8_(JavaScript_engine)
[SpiderMonkey]:https://en.wikipedia.org/wiki/SpiderMonkey
[interpret]:https://nodejs.dev/en/learn/the-v8-javascript-engine/
[Node.js]:https://nodejs.dev/en/learn/
[JS Engines]:https://github.com/tx00-web/material/Backend-related/JS-engines.md
[Node Intro]:https://github.com/tx00-web/material/Backend-related/node-intro.md
[Variables]:https://github.com/tx00-web/material/JS-related/variables.md
[Arrow Functions]:https://github.com/tx00-web/material/JS-related/arrow-functions.md
[Functions]:https://github.com/tx00-web/material/JS-related/functions.md
[Activity 1]:https://github.com/tx00-web/labs/be-node-basics1
[Activity 2]:https://github.com/tx00-web/labs/be-node-basics2