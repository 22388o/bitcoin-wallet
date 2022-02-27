import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar setSidebarOpen={() => { }} sidebarOpen={true} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className='text-3xl font-bold underline'>
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
        </header>
      </div>
    </Router>
  );
}

export default App;
