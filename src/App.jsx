import React, { useRef, useEffect } from 'react';
import { JSONEditor } from '@json-editor/json-editor';

function App() {
  const editorHolder = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://cloud-cube-eu2.s3.amazonaws.com/vqwb9svw2seg/public/data.json");
      const data = await response.json();

      if (editorHolder.current) {
        const editor = new JSONEditor(editorHolder.current, {
          schema: {},
          startval: {},
          theme: ''
        });

        editor.on('ready', function() {
          editor.setValue(data);
        });
      }
    };

    fetchData();
  }, []);
  const downloadJson = () => {
    const json = JSON.stringify(editor);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = Data.Name +'.json';
    anchorElement.click();
    URL.revokeObjectURL(url);
  };


  return (
    <>
    <div ref={editorHolder}></div>
    <button onClick={downloadJson}>Download JSON</button>
    </>
  );
}

export default App;