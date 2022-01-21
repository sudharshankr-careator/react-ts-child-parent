import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

function App() {
  const [name, setName] = useState('Reddy')
  // const change=(name)=> {
  //   setName(name)
  // }
  return(
    <div>
      <Hello name={setName} />
      <h1>{name}</h1>
    </div>
  )
}

render(<App />, document.getElementById('root'));
