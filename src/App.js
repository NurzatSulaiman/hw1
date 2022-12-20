import logo from './logo.svg';
import './App.css';
import Button from "./components/button";
import Image from "./components/image";
import Footer from "./components/footer";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image/>
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
        <Button />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
