import logo from './logo.svg';
import './App.css';
import appContext from './context';
import Home from './Home';
import Contact from './Contact'
import About from './About'
import Email from './Email'
import Address from './Address';
import { useState } from 'react';
function App() {
  const [user,setUser]=useState('veera')
  return (
    <appContext.Provider value={{user,setUser}}>
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
    </appContext.Provider>
  );
}

export default App;
