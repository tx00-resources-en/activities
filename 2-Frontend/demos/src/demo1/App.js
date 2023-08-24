// Demo 1: Your First Component

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