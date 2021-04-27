import logo from './logo.svg';
import './App.css';
import WelcomeView from './components/WelcomeView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        
      </header>
      <main>
        <WelcomeView />
      </main>

    </div>
  );
}

export default App;
