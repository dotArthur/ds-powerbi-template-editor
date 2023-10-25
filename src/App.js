import './App.css';
import { JSONEditor } from "react-schema-based-json-editor";
import { DATA } from './PowerBISchema';

  //I need a function called updateValue that will update the value of the JSONEditor
  const updateValue = (value) => {
    //update the initial value of the JSONEditor
    console.log(value);
    };

function App() {
  return (
    <div className="App">
      <button>Hier Klicken!!!</button>
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
    </div>
  );
}

export default App;
