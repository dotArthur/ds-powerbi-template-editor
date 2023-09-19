import React, {useEffect, useState} from 'react';
import ReactDom from 'react-dom';
import ColorPicker from './ColorPicker.js';

function App() {
  return (
    ReactDom.render(ColorPicker(),document.getElementById('root'))
  );
}

export default App

const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  