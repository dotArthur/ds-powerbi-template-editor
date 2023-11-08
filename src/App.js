import './App.css';
import React, { useState, useEffect } from 'react';
import { JSONEditor } from "react-schema-based-json-editor";

function App() {
  const [initialValue, setValue] = useState({});
  const updateValue = (newValue) => {setValue(newValue)}
  
  const [Data, setData] = useState({});

  async function getData(){
    const response = await fetch("https://cloud-cube-eu2.s3.amazonaws.com/vqwb9svw2seg/public/schema.json");
    setData(await response.json());
    return Data;
  }
  useEffect(() => {
    getData();
  });

  const downloadJson = () => {
    const json = JSON.stringify(initialValue);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = Data.name +'.json';
    anchorElement.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <JSONEditor
        schema={Data}
        initialValue={initialValue}
        updateValue={updateValue}
      />
      <button onClick={downloadJson}>Download JSON</button>
    </div>
  );
}

export default App;