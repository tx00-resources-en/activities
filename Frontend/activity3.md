# Activity 2:  `SignupPage`


### Setup

Create a new React application. Please choose only **one** alternatives

- First method

Open your terminal and run:
```sh
npx degit tx00-web/react-starter#main forms-signup-lab
cd forms-signup-lab
npm install
```

- Second method
Open your terminal and run:

```sh
npx create-react-app forms-signup-lab
cd forms-signup-lab
npm install
```

### Instructions

Create a `SignupPage` component with the following elements:

- An `input` of type `"email"` (bonus: make the input green/red when the email is valid/invalid)
- An `input` of type `"password"` (bonus: make the input green/red when the password is strong/weak)
- A `select` input, used for selecting a nationality, with possible options/values: `"en"`, `"de"`, `"fr"`
- A paragraph displaying `"Hello"`, `"Hallo"` or `"Bonjour"` based on the selected nationality
- A text "Your email is john@doe.com"

For this, you will need 3 state variables:

- `email`
- `password`
- `nationality`

**Example**

```jsx
<SignupPage />
```

> If  you want to style the component. Create a `SignupPage.css` file for the component's styles:

```css
/* SignupPage.css */
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.signup-form {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  max-width: 300px;
  background-color: #f5f5f5;
}

.input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.success {
  border-color: green;
}
```

<details>
  <summary>
   <h2>Extra activities</h2>
  </summary>

If you want to include Bootstrap with [Reactstrap](https://reactstrap.github.io), you should run

```sh
npm install reactstrap bootstrap
```

And add the following line in `src/App.js`

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

</details>