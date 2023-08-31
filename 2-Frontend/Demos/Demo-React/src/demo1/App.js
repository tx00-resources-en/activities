const App = () => {
  const headingStyle = {
 color: 'blue',
 fontSize: '24px',
 textAlign: 'center',
  };
  // const x={ color: 'green' }

  return (
 <div>
<h1 style={headingStyle}>Inline Styles</h1>
<p style={{ color: 'green' }}>This is a green paragraph.</p>
 </div>
  );
};

export default App;