import React, { useRef, useEffect, useState } from 'react';
import { JSONEditor } from '@json-editor/json-editor';
import * as Schema from '../PowerBITheme.json'


export default function BarChart() {
  const editorHolder = useRef(null);

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
    });

    editor.on('ready', function () {
      editor.setValue({});
      // Get the Object Properties button
      const objectPropertiesButton = document.querySelector('.json-editor-btn-edit_properties');
      // Add a 'click' event listener to the button
      objectPropertiesButton.addEventListener('click', function () {
        // Get all checkbox elements within the parent element
        const checkboxes = document.querySelectorAll('.form-control input[type=checkbox]');
        // Loop over the checkboxes
        for (let i = 0; i < checkboxes.length; i++) {
          // Set the checked attribute to true
          checkboxes[i].checked = true;
          // Create a new 'change' event
          var event = new Event('change');
          // Dispatch the event
          checkboxes[i].dispatchEvent(event);
        }
      });
    });

  }, []);
  
  const downloadJson = (editorHolder) => {
    if (editorHolder.current && editorHolder.current.editor) {
      const json = JSON.stringify(editorHolder.current.editor.getValue(), null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const anchorElement = document.createElement('a');
      anchorElement.href = url;
      anchorElement.download = editorHolder.current.editor.getValue(name) + '.json';
      anchorElement.click();
      URL.revokeObjectURL(url);
    }
  };
  
  return (
    <>
      <div ref={editorHolder}></div>
      <button onClick={() => downloadJson(editorHolder)}>Download JSON</button>    
      </>
  );
}