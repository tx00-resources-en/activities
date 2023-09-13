# React Forms - Intro

HTML forms are an essential and ubiquitous 
part of the web. Forms are used to search, create resources such as accounts and posts, update resources, and more. Learning how to create forms using React is
an invaluable skill for you to learn and practice.

When you finish this practice, you should be able to

- Create a React functional component containing a simple form
- Define controlled inputs with the `useState` hook for different form inputs

## Setup

Create a new React application. Please choose only **one** alternatives

- First method

Open your terminal and run:
```sh
npx degit tx00-web/react-starter#main forms-intro-lab
cd forms-intro-lab
npm install
```

- Second method
Open your terminal and run:

```sh
npx create-react-app forms-intro-lab
cd forms-intro-lab
npm install
```

## Creating a simple form

To learn how to create HTML forms in React, you will create a `ContactUs` functional component that will contain a simple `Contact Us` form. The form will
contain five fields:

- Name  - The name of the user filling out the form
- Email - The user's email
- Phone - The user's phone number
- Phone Type - A `select` list indicating whether the phone number is home,
  work, or mobile
- Comments - A `textarea` field for comments

## Defining the `ContactUs` form component

To start, add a functional component named `ContactUs` that renders an HTML form
with `Name`, `Email`, and `Phone` fields:

```jsx
// src/ContactUs.js

function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='text' />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input id='phone' type='text' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

So far, there's nothing particularly interesting about this form. The only thing
that looks different from regular HTML is that the `<label>` element's `for`
attribute is `htmlFor` in React.

Be sure to update your __App.js__ to render the `ContactUs` component:

```jsx
// src/App.js

import ContactUs from './ContactUs'

function App() {
  return (
    <ContactUs />
  );
}

export default App;
```

Look at the form in your browser. You can fill out the form, but the component currently doesn't know what the form input values are. To keep track of each of the input values, you will need to initialize and maintain component state.

## Adding state to the component

To add state to the `ContactUs` component, import `useState` from React.
Initialize three state variables--`name`, `email`, and `phone`--as empty strings. Then use them to set the `value` attributes on the corresponding form  field `<input>` elements.

For example, here is how you could do this for `Name`:

```jsx
// src/ContactUs.js

import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' value={name} />
        </div>
        {/* ... */}
```

Go ahead and repeat the process for `Email` and `Phone`.

Once you finish, refresh the browser. You will get a warning in your
console saying:

```text
 You provided a `value` prop to a form field without an `onChange` handler. This
 will render a read-only field.
```

Also, if you try typing in any of the fields, they won't update anymore. This is
because the `value` attribute for each input will always be an empty string.

For example, the `value` attribute on the `Name` field is set to the `name`
state variable. The `name` state variable is initialized to an empty string and
is never updated. Accordingly, the `Name` field will always be an empty string.
To fix this, you need to update the `name` state variable whenever the user
types into the field.

More generally, the associated component state variable needs to be updated
whenever a user changes a form field element value. Adding or removing a
character within an `<input>` element raises the `onChange` event, which makes
it a natural choice for keeping the component state in sync:

```jsx
<input
  id='name'
  type='text'
  onChange={e => setName(e.target.value)}
  value={name}
/>
```

Remember that when an event is raised, the associated event handler method is
called and passed an instance of the `event` object. A reference to the element
that raised the event is available through the `event` object's `target`
property. Using the reference to the form field element, you can retrieve the
current value as the `value` property on the target object.

Use the same approach to add an `onChange` event handler to the `Email` and
`Phone` form fields as well.

Click the `Open in New Window` button in your browser (upper right) and
open the React DevTools in the new window. You should be able to see the
component's state update as you type within each of the form fields (i.e., the
`<input>` elements). You can `console.log(name)` above your return to see this
change in real time in the console.

![onchange event handler](./react-forms-onchange-event-handler.png)

## Adding a `select` list

To maintain symmetry across React form element types, the `<select>` element
also uses a `value` attribute to get and set the element's selected option. To
see this in action, add a `<select>` element to the right of the `<input>`
element for the `Phone` form field. The `<select>` element should allow a user
to specify the type of phone number they're providing:

```jsx
// src/ContactUs.js

<div>
  <label htmlFor='phone'>Phone:</label>
  <input
    id='phone'
    name='phone'
    type='text'
    onChange={e => setPhone(e.target.value)}
    value={phone}
  />
  <select
    name='phoneType'
    onChange={e => setPhoneType(e.target.value)}
    value={phoneType}
  >
    <option value='' disabled>
      Select a phone type...
    </option>
    <option>Home</option>
    <option>Work</option>
    <option>Mobile</option>
  </select>
</div>
```

Note that you can leave the first `Select a phone type...` `<option>` element
as an empty value element before rendering the other `<option>` elements.

## Adding a `textarea`

In a regular HTML form, the value for a `<textarea>` element is defined by its
inner content:

```html
<textarea>This is the value for the text area element.</textarea>
```

In React js, a `<textarea>` element uses a `value` attribute instead of its
inner content to define its value. This allows the `<textarea>` element to be
handled in the same way as `<input>` elements.

To see this in action, add a `comments` state variable and add a "Comments"
field to the form:

```jsx
// src/ContactUs.js

<div>
  <label htmlFor='comments'>Comments:</label>
  <textarea
    id='comments'
    name='comments'
    onChange={e => setComments(e.target.value)}
    value={comments}
  />
</div>
```

## Handling form submissions

Now that the `ContactUs` component is initializing and updating state as form
field values change, it's time to handle form submissions! To start, create an
`onSubmit` function inside the component and attach it to the `onSubmit` event
listener for the form. Within the `onSubmit` event handler prevent the default
behavior so that the page does not reload:

```jsx
function ContactUs() {
  // ...

  const onSubmit = e => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}> {/* <-- Attaching event handler */}
        {/* ... */}
      </form>
    </div>
  );
}
```

Still in `onSubmit`, use the `name`, `email`, `phone`, `comments`, and
`phoneType` values from state to create a new `contactUsInformation` object
literal:

```jsx
  const onSubmit = e => {
    e.preventDefault();

    // Create a new object for the contact information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
  };
```

Notice that an additional property, `submittedOn`, is being added to the
`contactUsInformation` object literal to indicate the date/time that the
information was submitted. Ideally, the `contactUsInformation` object would be
persisted to a database using a RESTful API, but for now, you can just log the
object to the console.

Once the form submission has been processed, reset all the state values to empty
strings:

```jsx
  const onSubmit = e => {
    e.preventDefault();

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);

    // Reset the form state.
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
  };
```

You can now fill out each form field in your browser. When you click
`Submit`, an object containing your `Contact Us` information should appear in
the console! Also, note that the page doesn't reload.

## Controlled components

You now have a functioning React form! In creating it, you used what are known
as _controlled components_.

HTML form elements naturally maintain their own state. For example, an `input`
element will track the state of the value that's typed within it (without any
help from libraries like React). But a React component keeps track of its own
internal state. To keep a component's state as the "one source of truth",
`onChange` event handlers are used on form field elements to update the
component's state when a form element's state has changed.

This approach of making the component's state the "one source of truth" is
called _controlled components_. Inputs in a controlled component are called
_controlled inputs_.

To help you understand how this works, here's an overview of the flow:

1. A user types a character within a form `<input>` element.
2. The `<input>` element's `onChange` event is raised.
3. The event handler method associated with the `<input>` element's `onChange`
   event is called.
4. The event handler method updates the form field's value in state.
5. Updating the component's state causes React to re-render the component, i.e.,
   the `render` method is called.
6. The form `<input>` element is rendered with its `value` attribute set to the
   updated value from the state.

## Adding a text area

In a regular HTML form, the value for a `<textarea>` element is defined by its
inner content:

```html
<textarea>This is the value for the text area element.</textarea>
```

In React JSX, a `<textarea>` element uses a `value` attribute instead of its
inner content to define its value. This allows the `<textarea>` element to be
handled in the same way as `<input>` elements.

To see this in action, add a `comments` state variable and add a "Comments"
field to the form:

```jsx
// src/ContactUs.js

<div>
  <label htmlFor='comments'>Comments:</label>
  <textarea
    id='comments'
    name='comments'
    onChange={e => setComments(e.target.value)}
    value={comments}
  />
</div>
```

To support this new form field, you'll also need to update the `onSubmit`
function:

```jsx
// src/ContactUs.js

import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

## Adding a select list

To maintain symmetry across React form element types, the `<select>` element
also uses a `value` attribute to get and set the element's selected option. To
see this in action, add a `<select>` element to the right of the `<input>`
element for the `Phone` form field. The `<select>` element should allow a user
to specify the type of phone number they're providing:

```jsx
// src/ContactUs.js

<div>
  <label htmlFor='phone'>Phone:</label>
  <input
    id='phone'
    name='phone'
    type='text'
    onChange={e => setPhone(e.target.value)}
    value={phone}
  />
  <select
    name='phoneType'
    onChange={e => setPhoneType(e.target.value)}
    value={phoneType}
  >
    <option value='' disabled>
      Select a phone type...
    </option>
    <option>Home</option>
    <option>Work</option>
    <option>Mobile</option>
  </select>
</div>
```

Notice that you can leave the first `Select a phone type...` `<option>` element
as an empty value element before rendering the other `<option>` elements.

To complete this new field, update the state variables and `onSubmit` function
just like you did when adding the `Comments` form field:

```jsx
// src/ContactUs.js

import { useState } from 'react';

function ContactUs(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [phoneType, setPhoneType] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      phoneType,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
    setPhoneType('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option value='Home'>Home</option>
            <option value='Work'>Work</option>
            <option value='Mobile'>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
```

## What you have learned

In this practice you have learned how to

1. Create a React functional component containing a simple form with `input`,
   `textarea`, and `select` fields
2. Define controlled inputs with the `useState` hook
3. Create `<textarea>` and `<select>` fields in a React form

## Ref

- https://github.com/appacademy/aa34-react-forms-intro
- https://github.com/appacademy/aa34-react-forms-add-fields