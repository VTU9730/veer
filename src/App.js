import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact'
import About from './About'
import Email from './Email'
import Address from './Address';
function App() {
  return (
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
  );
}

export default App;
