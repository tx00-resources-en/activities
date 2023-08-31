import './App.css';
import Card from './Card';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1.5rem'
      }}
    >
      <Card
        displayName={'Mike Smith'}
        bio={'Head of Security at Startup.io and avid conference speaker.'}
      />
      <Card
        displayName={'John Michaelson'}
        bio={'Passionate Blockchain Engineer.'}
      />
      <Card
        displayName={'Amanda Johnson'}
        bio={'COO at Noodle. Passionate about providing our clients with the best possible services.'}
      />
      <Card
        displayName={'Gary McKnight'}
        bio={'Front-End Tech Lead & Book Writer.'}
      />
    </div>
  );
}

export default App;