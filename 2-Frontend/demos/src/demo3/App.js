// Demo 3: Writing Markup with JSX

// - JSX: Putting markup into JavaScript 
// - Converting HTML to JSX 
// - The Rules of JSX 
//   1. Return a single root element 
//   2. Close all the tags 
//   3. camelCase all most of the things! 
// - Pro-tip: Use a JSX Converter: https://transform.tools/html-to-jsx 



export default function App() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}


