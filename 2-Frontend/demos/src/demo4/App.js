// Demo 4: JavaScript in JSX with Curly Braces

// - Passing strings with quotes 
// - Using curly braces: A window into the JavaScript world 
// - Where to use curly braces 
// - Using “double curlies”: CSS and other objects in JSX 
// - More fun with JavaScript objects and curly braces 

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
