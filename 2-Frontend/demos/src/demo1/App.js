// Demo 1: Your First Component

// - Components: UI building blocks 
// - Defining a component 
//   Step 1: Export the component 
//   Step 2: Define the function 
//   Step 3: Add markup 
// - Pitfall
// - Using a component 
// - What the browser sees 
// - Nesting and organizing components 


// import Profile from './Profile';
import './app.css';

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}


function App() {
    return (
    <section>
    <h1>Amazing scientists</h1>
    <Profile />
    <Profile />
    <Profile />
  </section>
  );
  }
  
  export default App;