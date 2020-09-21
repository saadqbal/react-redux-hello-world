import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import { store } from './store'
import ButtonGroup from './ButtonBroup';

function App() {
  
  console.log(store.getState());
  return ([
    <HelloWorld key={1} tech={store.getState().tech} />,
    <ButtonGroup key={2} technologies={['React', 'Elm', 'React-Redux']} />
  ]
  );
}

export default App;
