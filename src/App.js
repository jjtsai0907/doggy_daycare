import logo from './logo.svg';
import './App.css';
import WelcomeView from './components/WelcomeView';
import RegisterView from './components/RegisterView';
import React, {useState, useEffect} from 'react';
import InfoView from './components/InfoView';
import DogApi from './DogApi';

function App() {

  const WELCOME = 'welcome', REGISTER = 'register', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  const apiUrl = 'https://api.jsonbin.io/b/607ef0d824143e5df08a0676';
  const [loaded, setLoaded] = useState(false);
  const [getDogData, setGetDogData] = useState(null);
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    DogApi(apiUrl, () => setLoaded(true), setGetDogData);
    console.log("getting data");
    
  }, []);

  let content = null;
  switch(currentScreen) {
    case WELCOME:
      content = <WelcomeView
      nextScreen={() => setCurrentScreen(REGISTER)} 
      />
      break;
    case REGISTER: 
      content = <RegisterView 
        dataLoaded = {loaded}
        getDogData = {getDogData}
        nextScreen = {() => setCurrentScreen(INFO)}
        setSelectedDog = {setSelectedDog}
      />
      break;
      case INFO:
        content = <InfoView 
        dataLoaded = {loaded}
        getDogData = {getDogData}
        selectedDog = {selectedDog}
        />;
      break;


    default:
      content = <WelcomeView
      nextScreen={() => setCurrentScreen(REGISTER)} 
      />
  }



  
  console.log({loaded});
  console.log({selectedDog}); 

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
