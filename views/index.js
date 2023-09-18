import React, {useEffect, useState} from 'react'
import ReactDom from "react-dom"
import ColorPicker from "./ColorPicker"

function App() {
  ReactDom.render(ColorPicker(),document.getElementById('root'))
  return (
    <div>
      <h1>Power BI Theme Editor</h1>
    </div>
  );
}

export default App