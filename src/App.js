import logo from './logo.svg';
import './App.css';
import { JSONEditor } from "react-schema-based-json-editor";
import { DATA } from './PowerBISchema';
//import {Data} from './PowerBISchemav2'

function App() {
    // Define the updateValue function
    const updateValue = (newValue) => {
      // Your code to handle the updated value goes here
      console.log(newValue);
    };
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
        <JSONEditor
        schema={DATA}
        initialValue={{ 
          "name": "Waveform", 
          "dataColors": ["#31B6FD", "#4584D3", "#5BD078", "#A5D028", "#F5C040", "#05E0DB", "#3153FD", "#4C45D3", "#5BD0B0", "#54D028", "#D0F540", "#057BE0"],
          "background":"#FFFFFF",
          "foreground": "#4584D3",
          "tableAccent": "#31B6FD"
      }}
        updateValue={updateValue}
        ></JSONEditor>
      </header>
    </div>
  );
}

export default App;
