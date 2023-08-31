# Backend: Week 2

> Before staring any activity make sure, that you have the following hierarchy. Change `weekNr` to `week1`, `week2` etc

```sh
Dev
└── weekNr
    ├── Frontend
    ├── Backend
    ├── Project
    └── Reflection-Journal
```


### Announcements

- Monday: 9:00 - 12:00 && 13:00 - **14:30**
- Thursday: **10:30** - 12:00 && 13:00 - 16:00

### Related Videos

- HTTP
  - [How The Web Works: (12 min)]
  - [HTTP Methods: (3 min)]
- JavaScript:
  - [Callback Functions: (first 18 min only)]
  - [JSON vs JavaScript Object Literals: (5 min)]
  - [JavaScript Template Literals: (5 min)]
- Express.js
  - [Express JS Crash Course: (first 16 min only)]

### Topics 

- ChatGPT for Developers
- HTTP
- Express
- JavaScript
  - JS objects vs JSON
  - Template Literals
  - Callback Functions
- Middlewares 
 

### Tentative Timeline

- Mini lecture (~35min)
- Group / Pair programming (~35min)
- Break (~15min)
- Mini lecture (~35min)
- Group / Pair programming (~35min)

---

### ChatGPT for Developers

- [ChatGPT Cheat Sheet for Developers]
- [4 ways devs can use ChatGPT to be more productive]

### Demo

- `npm init -y` ,  `npm i express`, `node server.js`
- visit `http://localhost:3001/`
- Scripts:  `"start": "node app.js"` then run `npm start`
- Stop server: `ctr + c`

### Prerequisite

-  Example in `demo2/index.js`
- JSON
  - [JSON]
  - [JSON.parse()]
  - [JSON.stringify()] 
- [Template Literals]
- Functions are [first class citizens]
  -  Ability to treat functions as values
  -  Ability to pass a function as arguments
  -  Ability to return a function from another function
- [TCP ports] 
- [HTTP methods]


### Express: Part 1

- Naming `app.js` vs `server.js` vs `index.js`
- `app.get()`, `app.listen()`
- `req`, `res`: `res.json()`



### Activity 1

- [Express lab] - part 1.
- [JavaScript lab]

---

### Express & Middlewares

- Naming `app.js` vs `server.js` vs `index.js`
- [`nodemon`]
  - why `nodemon`? 
  - `npm install nodemon --save-dev`
  - Script: `"dev": "nodemon app.js"`
  - Run script: `npm run dev` **NOT** `npm dev`
- [Middlewares]


### Activity 2

- [Express lab] - part 2
- [Express Middleware]




---

### Study Material
- [Express: hello world]
- [Middlewares]
- [Express middleware: A complete guide]


<!-- 
### Other Links used during the lecture
- https://github.com/vdespa
 -->




<!-- Links -->
[Callback Functions: (first 18 min only)]:https://youtu.be/QSqc6MMS6Fk
[How The Web Works: (12 min)]:https://youtu.be/hJHvdBlSxug
[HTTP Methods: (3 min)]:https://youtu.be/tkfVQK6UxDI
[JSON vs JavaScript Object Literals: (5 min)]:https://youtu.be/912_cPllMyg
[JavaScript Template Literals: (5 min)]:https://youtu.be/NgF9-pdTDGs
[Express JS Crash Course: (first 16 min only)]:https://youtu.be/L72fhGm1tfE
[JSON]:https://www.json.org/json-en.html
[Express]:http://expressjs.com/
[JSON]:https://www.w3schools.com/js/js_json_intro.asp
[JSON.parse()]:https://www.w3schools.com/js/js_json_parse.asp
[JSON.stringify()]:https://www.w3schools.com/js/js_json_stringify.as
[Template Literals]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
[TCP ports]:https://en.wikipedia.org/wiki/Port_%28computer_networking%29 
[HTTP methods]:https://en.wikipedia.org/wiki/HTTP#Request_methods
[`nodemon`]:https://www.npmjs.com/package/nodemon
[first class citizens]:https://www.geeksforgeeks.org/what-is-first-class-citizen-in-javascript/ 
[Middlewares]:https://expressjs.com/en/guide/writing-middleware.html
[Express lab]:https://github.com/tx00-web/labs/tree/main/be-express-basics
[Express: hello world]:https://expressjs.com/en/starter/hello-world.html
[JavaScript lab]:https://github.com/tx00-web/labs/tree/main/be-express-prerequisite
[Express Middleware]:https://github.com/tx00-web/labs/tree/main/be-express-middleware
[Express middleware: A complete guide]:https://blog.logrocket.com/express-middleware-a-complete-guide/
[ChatGPT Cheat Sheet for Developers]:https://hackr.io/blog/chatgpt-cheat-sheet-for-developer
[4 ways devs can use ChatGPT to be more productive]:https://www.educative.io/blog/chatgpt-how-it-can-help-devs-productivity
