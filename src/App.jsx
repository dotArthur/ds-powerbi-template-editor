import React, { useRef, useEffect } from 'react';
import { JSONEditor } from '@json-editor/json-editor';

function App() {
  const editorHolder = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://cloud-cube-eu2.s3.amazonaws.com/vqwb9svw2seg/public/data.json")
      const data = await response.json();

      if (editorHolder.current) {
        const editor = new JSONEditor(editorHolder.current, {
          schema: {},
          startval: {},
          theme: '',
          disable_edit_json: true,
          ajax: true,
          ajax_cache_responses: true,
          disable_properties: true,
          compact: true
        });

        editor.on('ready', function() {
          editor.setValue(data);
        });
      }
    };
    
    fetchData();
  }, []);
    const downloadJson = () => {
      const json = JSON.stringify(editorHolder.current.editor.getValue(), null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const anchorElement = document.createElement('a');
      anchorElement.href = url;
      anchorElement.download = data.name +'.json';
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