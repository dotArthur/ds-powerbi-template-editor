import { useRef, useEffect, useState } from 'react';
import { JSONEditor } from '@json-editor/json-editor';
import * as Schema from '../PowerBITheme.json'


export default function BarChart() {
  const editorHolder = useRef(null);
  const [editorVal, seteditorVal] = useState({});

  useEffect(() => {
    const editor = new JSONEditor(editorHolder.current, {
      schema: Schema,
      startval: {},
      disable_edit_json: true,
      ajax: false,
      ajax_cache_responses: false,
      disable_properties: false,
      compact: false,
      display_required_only: true,
      disable_collapse: true,
      form_name_root: 'ds-powerbi-template-editor',
      no_additional_properties: true,
    });

     const JsonDownloader = document.getElementById('downloadButton');
     JsonDownloader.addEventListener('click', downloadJson);

    editor.on('ready', function () {
      // editor.setValue({});
    });

    editor.on('change', function () {
      let value = editor.getValue()
      seteditorVal(value);
      console.log(value);
      console.log(editorVal);
    });
  }, []);
  
  const downloadJson = () => {
    if (editorHolder.current) {
      const editorValue = editorVal;
      const json = JSON.stringify(editorValue, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const anchorElement = document.createElement('a');
      anchorElement.href = url;
      anchorElement.download ='json';
      anchorElement.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <div ref={editorHolder}></div>
      </>
  );
}