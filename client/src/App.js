import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000")
    .then(res => res.text())
    .then(data => setMsg(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
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
      </header>

      <h1>{msg}</h1>
    </div>
  );
}

export default App;
