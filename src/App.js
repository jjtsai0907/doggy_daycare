import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './doggylogo.png';
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

  console.log({loaded});
  console.log({selectedDog}); 

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        
      </header>
      
       
      <Switch>
        <Route exact path="/">
          <WelcomeView />
        </Route>
        <Route path="/register">
          <RegisterView 
            dataLoaded = {loaded}
            getDogData = {getDogData}
            setSelectedDog = {setSelectedDog}
          />
        </Route>
        <Route path="/info">
          <InfoView 
            dataLoaded = {loaded}
            getDogData = {getDogData}
            selectedDog = {selectedDog}
          />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
