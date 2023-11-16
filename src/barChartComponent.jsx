import React, { useRef, useEffect, useState } from 'react';
import { JSONEditor } from '@json-editor/json-editor';
import * as SchemaFetchPATH from '../PowerBITheme.json'

export default function BarChart() {
  const editorHolder = useRef(null);
  const [dataName, setDataName] = useState('');
  const [valueDATA, setValueDATA] = useState({});
  const [schemDATA, setSchemaDATA] = useState({});

  useEffect(() => {
    const ValueFetchPATH  = "https://cloud-cube-eu2.s3.amazonaws.com/vqwb9svw2seg/public/data.json";
    // const SchemaFetchPATH  = "https://cloud-cube-eu2.s3.amazonaws.com/vqwb9svw2seg/public/";
    const fetchData  = async (FetchPATH) => {
      const response = await fetch(FetchPATH);
      const data     = await response.json();
      
      if (FetchPATH == ValueFetchPATH) {
        setValueDATA(data)
        setDataName(data.name);
      }
      else if (FetchPATH == SchemaFetchPATH) {
        setSchemaDATA(data)
      }
    };
      
        const editor = new JSONEditor(editorHolder.current, {
          schema: SchemaFetchPATH, //schemDATA,
          startval: {},
          disable_edit_json: true,
          ajax: false,
          ajax_cache_responses: false,
          disable_properties: false,
          compact: false,
          display_required_only: true,
          refs: {},
          form_name_root: 'ds-powerbi-template-editor',
        });
        
        editor.on('ready', function () {
           editor.setValue({});
        });
        //fetchData(ValueFetchPATH);
        //fetchData(SchemaFetchPATH);
    

  }), [];

  const downloadJson = () => {
    const json = JSON.stringify(editorHolder.current.editor.getValue(), null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = dataName + '.json';
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