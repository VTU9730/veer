import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact'
import About from './About'
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <p>App component</p>
         <Home />
         <Contact />
         <About />
      </header>
    </div>
  );
}

export default App;
