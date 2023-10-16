import { JSONEditor } from "react-schema-based-json-editor";
// import logo from './logo.svg';
import './App.css';
import DATA from './PowerBISchema';
import MarkdownIt from 'markdown-it'

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
<JSONEditor schema={DATA}
    initialValue={DATA}
    updateValue={this.updateValue}
    theme="bootstrap3"
    icon="fontawesome4"
    markdownit={MarkdownIt}>
</JSONEditor>
    </div>

    
  );


}
export default App;