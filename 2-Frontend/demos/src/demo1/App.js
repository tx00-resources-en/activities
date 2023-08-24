import './app.css';

function Greeting() {
  return  <h2>My First Component !!!!</h2>;
}

function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}

export default App;