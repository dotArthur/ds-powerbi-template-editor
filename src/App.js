import './App.css';
import { useState } from 'react';
import { JSONEditor } from "react-schema-based-json-editor";

function App() {
  const [value, setValue] = useState({
    "legend": true,
    "chartType": "bar",
    "barDirection": "vertical",
    "barStyle": {
      "fill": "#336699",
      "stroke": "#000000"
    }
  });

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  const downloadJson = () => {
    const json = JSON.stringify(value);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = 'updatedValue.json';
    anchorElement.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <JSONEditor
        schema={
          {
          "type": "object",
          "properties": {
            "legend": {
              "type": "boolean",
              "title": "Legend"
            },
            "chartType": {
              "type": "string",
              "title": "Chart Type"
            },
            "barDirection": {
              "type": "string",
              "title": "Bar Direction"
            },
            "barStyle": {
              "type": "object",
              "title": "Bar Style",
              "properties": {
                "fill": {
                  "title": "Fill",
                  "type": "string",
                  "format": "color"
                },
                "stroke": {
                  "title": "Stroke",
                  "type": "string",
                  "format": "color"
                }
              }
            }
          },
          "required": ["chartType", "barDirection", "barStyle"]
        }
      }
        initialValue={value}
        updateValue={updateValue}
      />
      <button onClick={downloadJson}>Download JSON</button>
    </div>
  );
}

export default App;
