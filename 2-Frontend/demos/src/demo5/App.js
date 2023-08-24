// Demo 5: Passing Props to a Component

// - Familiar props 
// - Passing props to a component 
//   Step 1: Pass props to the child component
//   Step 2: Read props inside the child component 

  // Next time
// - Specifying a default value for a prop 
// - Forwarding props with the JSX spread syntax 
// - Passing JSX as children 


import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
