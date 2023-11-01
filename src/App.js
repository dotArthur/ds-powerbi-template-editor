import './App.css';
import { useState } from 'react';
import { JSONEditor } from "react-schema-based-json-editor";
import { schema } from 'https://cloud-cube-eu2.s3.amazonaws.com/tgead1omqd79/public/schema.js';

function App() {
  const [initialValue, setValue] = useState({});

  const updateValue = (newValue) => {
    setValue(newValue);
  };
  

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
