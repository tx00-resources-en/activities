// Demo 2: Importing and Exporting Components

// - The root component file 
// - Exporting and importing a component 
// - Default vs named exports 
// - Exporting and importing multiple components from the same file 

// import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}