// Demo 6: Conditional Rendering

// - Conditionally returning JSX 
// - Conditionally returning nothing with null 
// - Conditionally including JSX 
// - Conditional (ternary) operator (? :) 
// - Conditionally assigning JSX to a variable 

// next time
// - Logical AND operator (&&) 

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
