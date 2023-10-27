import './App.css';
import { useState } from 'react';
import { JSONEditor } from "react-schema-based-json-editor";
import { schema } from './schema';

function App() {
  const [initialValue, setValue] = useState({});

  const updateValue = (newValue) => {
    setValue(newValue);
  };
  
  fetch("https://eu1-worthy-vulture-40496.upstash.io/set/foo/bar", {
    headers: {
      Authorization: "Bearer AZ4wASQgMmVhYmE3M2QtZGEwOS00YTYyLWIwMTMtOTk0YWE1Y2EyMGZlNTE3OWRkZDM3ODc2NDJkYmEwMjY4MThkZTQ3NWJmNGE="
    }
  }).then(response => response.json())
    .then(data => console.log(data));

  const downloadJson = () => {
    const json = JSON.stringify(initialValue);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = initialValue.name +'.json';
    anchorElement.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (event) => {
        const content = event.target.result;
        try {
          const parsedContent = JSON.parse(content);
          setValue(parsedContent);
        } catch (error) {
          console.error(error);
        }
      };
      reader.onerror = (event) => {
        console.error("File reading error: ", event.target.error);
      };
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileUpload} />
      <JSONEditor
        schema={schema}
        initialValue={initialValue}
        updateValue={updateValue}
        disableCollapse = {true}
      />
      <button onClick={downloadJson}>Download JSON</button>
    </div>
  );
}

export default App;
