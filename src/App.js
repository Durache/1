import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
window.Telegram.WebApp
const tg = window.Telegram.WebApp

function App() {

    useEffect(() => {
        tg.ready():
    }, []);

    const onClose = () => {
        tg.close()
    }
  return (
    <div className="App">
      work
        <button>Закрыть</button>
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
    </div>
  );
}

export default App;
