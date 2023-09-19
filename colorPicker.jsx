import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function PowerBIThemeEditor() {
  const [jsonFile, setJsonFile] = useState(null);
  const [editedJson, setEditedJson] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Startfarbe muss noch in dotSource Standard gesetzt werden

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = JSON.parse(e.target.result);
      setJsonFile(fileContent);
      setEditedJson(fileContent); 
    };

    reader.readAsText(file);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);

    if (editedJson) {
      const updatedJson = { ...editedJson };
      updatedJson.color = color.hex;
      setEditedJson(updatedJson);
    }
  };

  const handleDownload = () => {
    if (editedJson) {
      const updatedJsonString = JSON.stringify(editedJson, null, 2);

      const data = new Blob([updatedJsonString], { type: 'application/json' });
      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'edited-file.json';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <input type="file" onChange={handleFileUpload} accept=".json" />
      {jsonFile && (
        <div>
          <SketchPicker color={selectedColor} onChange={handleColorChange} />
          <button onClick={handleDownload}>Download JSON</button>
        </div>
      )}
    </div>
  );
}

export default PowerBIThemeEditor;
