import logo from './logo.svg';
import './App.css';
import Home from './Home';
import "@fontsource/poppins"; // Default weight (400)
import "@fontsource/poppins/600.css"; 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home />
    </div>
  );
}

export default App;
