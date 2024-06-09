import logo from './logo.svg';
import './App.css';
import appContext,{userContext} from './context';
import Home from './Home';
import Contact from './Contact'
import About from './About'
import Email from './Email'
import Address from './Address';
import { useState } from 'react';
function App() {
  const [app,setApp]=useState('Demo')
  const [user,setUser]=useState({
    firstName:'Veeraprathap Reddy',
    lastName:'Siddavatam',
    education:'UG'
  })
  return (
    <appContext.Provider value={{app,setApp}}>
    <userContext.Provider value={{user,setUser}}>
      <div className="App">
        <header className="App-header">
          <p>App component</p>
          <Home />
          <Contact />
          <About />
          <Address />
          <Email />
        </header>
      </div>
    </userContext.Provider>
    </appContext.Provider>
  );
}

export default App;
