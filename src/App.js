import logo from './logo.svg';
import './App.css';
import WelcomeView from './components/WelcomeView';
import RegisterView from './components/RegisterView';
import React, {useState} from 'react';
import InfoView from './components/InfoView';

function App() {

  const WELCOME = 'welcome', REGISTER = 'register', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;
  switch(currentScreen) {
    case WELCOME:
      content = <WelcomeView
        nextScreen={() => setCurrentScreen(REGISTER)} />
      break;
    case REGISTER: 
      content = <RegisterView 
          //answeredCorrectly={() => setScore(score + 1)}
          nextScreen={() => setCurrentScreen(INFO)}
      />
      break;
    default:
      content = <InfoView />;
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        
      </header>

      <main>
      {content}
      </main>

    </div>
  );
}

export default App;
